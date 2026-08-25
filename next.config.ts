import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const basePath = isGitHubPages && repositoryName ? `/${repositoryName}` : '';

const nextConfig: NextConfig = isGitHubPages
  ? {
      basePath,
      images: { unoptimized: true },
      output: 'export',
      trailingSlash: true,
    }
  : {};

export default nextConfig;
