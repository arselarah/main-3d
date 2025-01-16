/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Opcional, pero recomendado
  output: 'export', // Para exportación estática
  images: {
    unoptimized: true, // Deshabilita la optimización de imágenes
  },
}

export default nextConfig
