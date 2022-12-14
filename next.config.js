const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      's3-us-west-2.amazonaws.com',
      'images.unsplash.com',
      'miro.medium.com',
      's3.us-west-2.amazonaws.com',
      'images.pexels.com',
      'i.imgur.com',
      'thumbs.gfycat.com',
      "lh3.googleusercontent.com",
    ],
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'test',
  },
})
