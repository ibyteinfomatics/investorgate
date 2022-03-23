module.exports = {
    distDir: 'build',
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
     images: {
      loader: 'imgix',
      path: '/',
    }

  }
