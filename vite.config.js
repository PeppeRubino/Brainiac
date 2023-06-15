// vite.config.js

module.exports = {
    build: {
      rollupOptions: {
        input: {
          main: '/path/to/your/dist/index.html', // Percorso per la versione nella cartella 'dist'
          mobile: '/path/to/your/mobile/index.html' // Percorso per la versione nella cartella 'mobile'
        }
      }
    }
  };
  