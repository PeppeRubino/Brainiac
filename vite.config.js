// vite.config.js

module.exports = {
    build: {
      rollupOptions: {
        input: {
          main: '/dist/index.html', // Percorso per la versione nella cartella 'dist'
          mobile: '/mobile/index.html' // Percorso per la versione nella cartella 'mobile'
        },
        external: [
          // Aggiungi qui eventuali moduli esterni da escludere dal bundle
        ]
      }
    }
  };
  