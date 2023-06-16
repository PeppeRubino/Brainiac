function redirectBasedOnUserAgent() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;

  if ((isMobile && isPortrait && window.location.pathname !== "/mobile/index.html") ||
      (!isMobile && !isPortrait && window.location.pathname !== "/index.html")) {
    if (isMobile) {
      window.location.href = "../mobile/index.html";
    } else {
      window.location.href = "../index.html";
    }
  }
}

redirectBasedOnUserAgent();



  function handleOrientationChange() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  
    if (isMobile && !isPortrait && window.location.pathname !== "/mobile/index.html") {
      window.location.href = "../mobile/index.html";
    }
  }
  
  window.addEventListener("orientationchange", handleOrientationChange);
  