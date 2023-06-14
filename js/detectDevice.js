function redirectBasedOnUserAgent() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    if (isMobile) {
      window.location.href = "../mobile/index.html";
    } else {
      window.location.href = "../index.html";
    }
  }
  
  redirectBasedOnUserAgent();
  
  