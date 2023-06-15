function redirectBasedOnUserAgent() {
  const isMobile = window.innerWidth <= 768; // Modifica il valore 768 con la larghezza desiderata per i dispositivi mobili

  if (isMobile && window.location.pathname !== "/mobile/index.html") {
    window.location.href = "mobile/index.html";
  } else if (!isMobile && window.location.pathname !== "/index.html") {
    window.location.href = "index.html";
  }
}

redirectBasedOnUserAgent();

  