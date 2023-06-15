// vite.config.js

module.exports = {
    build: {
      rollupOptions: {
        input: {
          main: '/dist/index.html', // Percorso per la versione nella cartella 'dist'
          mobile: '/mobile/index.html' // Percorso per la versione nella cartella 'mobile'
        },
        external: [
            '/js/index.js'
        ]
      }
    }
  };
  