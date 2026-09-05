import type { KVLike } from '../lib/license.ts';
export const memoryKV = (): KVLike & { store: Map<string, string> } => {
  const store = new Map<string, string>();
  return {
    store,
    async get(k) {
      return store.get(k) ?? null;
    },
    async put(k, v) {
      store.set(k, v);
    },
  };
};
