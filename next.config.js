/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
    nextConfig,
    images: {
        domains: ['niftory-assets-prod.s3.amazonaws.com'],
      }
}
