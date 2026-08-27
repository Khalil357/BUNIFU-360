/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages
  output: "export",
  // GitHub Pages project sites are served from /<repo-name>/,
  // so we read the repo name from the build environment.
  basePath: process.env.BASE_PATH || "",
  // Required for static export if you use next/image
  images: { unoptimized: true },
};

export default nextConfig;
