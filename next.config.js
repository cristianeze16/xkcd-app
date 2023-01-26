/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgs.xkcd.com",
        port: "",
        pathname: "/comics/**",
      },
    ],
  },
  i18n:{
    locales:['en','es'],
    defaultLocale: 'en',
   
  }
};

module.exports = nextConfig;
//  domains : ['imgs.xkcd.com'],
