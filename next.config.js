const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/kids-daily-routine' : '',
  assetPrefix: isProd ? '/kids-daily-routine' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
