/** @type {import('next').NextConfig} */

const branchName = process.env.BRACH_NAME ? "/" + process.env.BRACH_NAME : "";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: branchName,
  bacshPath: branchName,
};

module.exports = nextConfig
