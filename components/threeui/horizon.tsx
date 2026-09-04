'use client';
import { useEffect, useRef } from 'react';
import { LUMINA_FRAGMENT_SHADER } from './horizon-shaders';

/** Emerald Horizon, adapted from MengTo/threeui (MIT). See adjacent LICENSE.
 * Native WebGL adapter: bounded resolution, reduced motion and visibility lifecycle.
 */
export function Horizon() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { alpha: true, antialias: false });
    if (!gl) return;
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };
    const vertex = compile(
      gl.VERTEX_SHADER,
      'attribute vec2 position; varying vec2 vUv; void main(){vUv=position*.5+.5;gl_Position=vec4(position,0.,1.);}',
    );
    const fragment = compile(
      gl.FRAGMENT_SHADER,
      'precision mediump float;\n' +
        LUMINA_FRAGMENT_SHADER.replace(
          'smoothstep(0.4, -0.1, yPos + combinedWave)',
          '(1.0 - smoothstep(-0.1, 0.4, yPos + combinedWave))',
        ).replace(
          'smoothstep(1.2, 0.5, length(st - vec2(0.5, 0.0)))',
          '(1.0 - smoothstep(0.5, 1.2, length(st - vec2(0.5, 0.0))))',
        ),
    );
    if (!vertex || !fragment) {
      if (vertex) gl.deleteShader(vertex);
      if (fragment) gl.deleteShader(fragment);
      return;
    }
    const program = gl.createProgram()!;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      return;
    }
    const activateProgram = gl.useProgram.bind(gl);
    activateProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const pos = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    const uniform = (name: string) => gl.getUniformLocation(program, name);
    const time = uniform('u_time'),
      resolution = uniform('u_resolution');
    for (const [key, value] of Object.entries({
      u_wave_scale: 0.7,
      u_variation: 1,
      u_glow: 0.85,
      u_vignette: 1,
    }))
      gl.uniform1f(uniform(key), value);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0,
      visible = true;
    const draw = (now: number) => {
      frame = 0;
      gl.uniform1f(time, reduced.matches ? 2 : now * 0.00018);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      if (visible && !document.hidden && !reduced.matches)
        frame = requestAnimationFrame(draw);
    };
    const update = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (visible && !document.hidden) draw(performance.now());
    };
    const resize = () => {
      canvas.width = Math.round(
        canvas.clientWidth * Math.min(devicePixelRatio, 1.25),
      );
      canvas.height = Math.round(
        canvas.clientHeight * Math.min(devicePixelRatio, 1.25),
      );
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      update();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    intersection.observe(canvas);
    document.addEventListener('visibilitychange', update);
    reduced.addEventListener('change', update);
    resize();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      document.removeEventListener('visibilitychange', update);
      reduced.removeEventListener('change', update);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);
  return <canvas ref={ref} className="horizon-canvas" aria-hidden="true" />;
}
