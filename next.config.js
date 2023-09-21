/** @type {import('next').NextConfig} */

const branchName = process.env.BRACH_NAME ? "/" + process.env.BRACH_NAME : "";
const notionSecrets = process.env.NOTION_SECRETS ? process.env.NOTION_SECRETS : "";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: branchName,
  basePath: branchName,
  notionSecrets: notionSecrets
};

module.exports = nextConfig;