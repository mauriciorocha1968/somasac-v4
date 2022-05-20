/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_API_URL: process.REACT_APP_API_URL
  }
}
module.exports = nextConfig

const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
  images: {
    disableStaticImages: true
  }
})
