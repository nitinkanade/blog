/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
    distDir: 'dist',
    images: {
        unoptimized: true
      }
}

export default nextConfig