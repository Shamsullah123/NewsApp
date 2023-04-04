// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
       
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        
      },
    ],
  },
}
