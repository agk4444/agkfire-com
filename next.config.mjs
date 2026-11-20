/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  // Folders with index.html, so /ventures serves on plain Apache/Plesk
  // without rewrites (extensionless hrefs like "/ventures" resolve).
  trailingSlash: true,
};

export default nextConfig;