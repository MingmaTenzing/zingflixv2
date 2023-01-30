/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com', 'img.omdbapi.com']
  },
  swcMinify: true,

  compiler: {
    styledComponents: true
  }

  
  
}

module.exports = nextConfig
