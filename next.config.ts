/** @type {import('next').NextConfig} */
const nextConfig = {
  // next/image bileşeninin harici URL'lerden görselleri optimize etmesine
  // ve sunmasına izin vermek için bu yapılandırma gereklidir.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Bu hostnamedeki tüm yollara izin ver
      },
      // Gelecekte başka bir kaynak eklemek istersek buraya ekleyebiliriz.
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.example.com',
      // },
    ],
  },
};

export default nextConfig;
