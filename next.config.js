
const remotePatternsPart1 = [
  {
    protocol: "https",
    hostname: "assets1.cbsnewsstatic.com",
  },
  {
    protocol: "https",
    hostname: "thehill.com",
  },
  {
    protocol: "https",
    hostname: "deadline.com",
  },
  {
    protocol: "https",
    hostname: "g.foolcdn.com",
  },
  {
    protocol: "https",
    hostname: "i.insider.com",
  },
  {
    protocol: "https",
    hostname: "www.coindesk.com",
  },
  {
    protocol: "https",
    hostname: "www.ft.com",
  },
  {
    protocol: "https",
    hostname: "www.kron4.com",
  },
  {
    protocol: "https",
    hostname: "www.investopedia.com",
  },
  {
    protocol: "https",
    hostname: "nypost.com",
  },
  {
    protocol: "https",
    hostname: "kubrick.htvapps.com",
  },
  {
    protocol: "https",
    hostname: "i.insider.com",
  },
  {
    protocol: "https",
    hostname: "www.coindesk.com",
  },
  {
    protocol: "https",
    hostname: "www.ft.com",
  },
  {
    protocol: "https",
    hostname: "www.kron4.com",
  },
  {
    protocol: "https",
    hostname: "www.investopedia.com",
  },
  {
    protocol: "https",
    hostname: "nypost.com",
  },
  {
    protocol: "https",
    hostname: "kubrick.htvapps.com",
  },
  {
    protocol: "https",
    hostname: "images.wsj.net",
  },
  {
    protocol: "https",
    hostname: "www.pennlive.com",
  },
  {
    protocol: "https",
    hostname: "www.washingtonpost.com",
  },
  {
    protocol: "https",
    hostname: "sportshub.cbsistatic.com",
  },
  {
    protocol: "https",
    hostname: "assets.bwbx.io",
  },
  {
    protocol: "https",
    hostname: "i.abcnewsfe.com",
  },
  {
    protocol: "https",
    hostname: "www.reuters.com",
  },
  {
    protocol: "https",
    hostname: "assets-prd.ignimgs.com",
  },
  {
    protocol: "https",
    hostname: "imageio.forbes.com",
  },
  {
    protocol: "https",
    hostname: "i.kinja-img.com",
  },
  {
    protocol: "https",
    hostname: "www.politico.eu",
  },
  {
    protocol: "https",
    hostname: "spaceflightnow.com",
  },
  {
    protocol: "https",
    hostname: "a2.espncdn.com",
  },
  {
    protocol: "https",
    hostname: "image.cnbcfm.com",
  },
  {
    protocol: "https",
    hostname: "dims.apnews.com",
  },
  {
    protocol: "https",
    hostname: "ichef.bbci.co.uk",
  },
  {
    protocol: "https",
    hostname: "s.yimg.com",
  },
  {
    protocol: "https",
    hostname: "i.ytimg.com",
  },
  {
    protocol: "https",
    hostname: "media.cnn.com",
  },
  {
    protocol: "https",
    hostname: "www.nasa.gov",
  },
  {
    protocol: "https",
    hostname: "static.foxnews.com",
  },
  {
    protocol: "https",
    hostname: "akns-images.eonline.com",
  },
];

// const remotePatternsPart2 = [
//   {
//     protocol: "https",
//     hostname: "static.politico.com",
//   },
//   {
//     protocol: "https",
//     hostname: "cdn.arstechnica.net",
//   },
//   {
//     protocol: "https",
//     hostname: "cdn.cnn.com",
//   },
//   {
//     protocol: "https",
//     hostname: "www.etonline.com",
//   },
//   {
//     protocol: "https",
//     hostname: "a1.espncdn.com",
//   },
//   {
//     protocol: "https",
//     hostname: "assets2.cbsnewsstatic.com",
//   },
//   {
//     protocol: "https",
//     hostname: "www.nydailynews.com",
//   },
//   {
//     protocol: "https",
//     hostname: "variety.com",
//   },
//   {
//     protocol: "https",
//     hostname: "cdn.abcotvs.com",
//   },
//   {
//     protocol: "https",
//     hostname: "static.politico.com",
//   },
//   {
//     protocol: "https",
//     hostname: "cdn.arstechnica.net",
//   },
//   {
//     protocol: "https",
//     hostname: "www.nydailynews.com",
//   },
//   {
//     protocol: "https",
//     hostname: "variety.com",
//   },
//   {
//     protocol: "https",
//     hostname: "cdn.abcotvs.com",
//   },
//   {
//     protocol: "https",
//     hostname: "www.usatoday.com",
//   },
//   {
//     protocol: "https",
//     hostname: "images-cf.news12static.com",
//   },
//   {
//     protocol: "https",
//     hostname: "ktla.com",
//   },
//   {
//     protocol: "https",
//     hostname: "www.rollingstone.com",
//   },
//   {
//     protocol: "https",
//     hostname: "gray-khnl-prod.cdn.arcpublishing.com",
//   },
//   {
//     protocol: "https",
//     hostname: "static.www.nfl.com",
//   },
//   {
//     protocol: "https",
//     hostname: "cdn.cnn.com",
//   },
//   {
//     protocol: "https",
//     hostname: "www.etonline.com",
//   },
//   {
//     protocol: "https",
//     hostname: "a1.espncdn.com",
//   },
//   {
//     protocol: "https",
//     hostname: "assets2.cbsnewsstatic.com",
//   },
// ];

module.exports = {
  images: {
    domains: ["example.com"],
    remotePatterns: [
      ...remotePatternsPart1,
      // ...remotePatternsPart2,
    ],
  },
};

