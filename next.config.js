/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  // pageExtensions: ["page.ts", "page.tsx"],
  async redirects() {
    return [
      {
        source: "/dashbaord/components",
        destination: "/dashbaord",
        // 경로 일치 해야할 때
        permanent: true,
      },
    ];
  },
  rewrites() {
    return [
      {
        source: "/test",
        destination: "https://api.tvmaze.com/search/shows?q=batman",
      },
    ];
  },
};
