exports.handler = async (event, context) => {
    const userAgent = event.headers['user-agent'];
    
    // Verifica se l'utente sta accedendo da un dispositivo mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    // Reindirizza in base al dispositivo
    if (isMobile) {
      return {
        statusCode: 302,
        headers: {
          Location: '/mobile/index.html',
        },
        body: '',
      };
    } else {
      return {
        statusCode: 302,
        headers: {
          Location: '/index.html',
        },
        body: '',
      };
    }
  };
  