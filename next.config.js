/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net", //get source link from cdn animelist
      },
      {
        hostname: "placehold.co",
      },
    ],
  },
};

module.exports = nextConfig;
