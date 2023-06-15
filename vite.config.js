module.exports = {
    build: {
      rollupOptions: {
        input: {
          main: '/dist/index.html', // Path to the version in the 'dist' folder
          mobile: '/mobile/index.html' // Path to the version in the 'mobile' folder
        },
        external: [
          '/js/index.js',
          '/js/aree_broadmann.js',
          '/js/redirect.js'
        ]
      }
    }
  };
  