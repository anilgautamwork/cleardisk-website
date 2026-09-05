import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // vinext streams generateMetadata() output into <body> for browsers and only
  // renders it inside <head> for "HTML-limited bots". Treat every user agent as
  // one so guide pages expose title, canonical and OG tags in <head> for any
  // crawler or auditor that does not run JavaScript.
  htmlLimitedBots: /./,
};

export default nextConfig;
