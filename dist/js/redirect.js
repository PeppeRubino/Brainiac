function redirectBasedOnUserAgent() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;

  if (isMobile && window.location.pathname !== "/mobile/index.html") {
    window.location.href = "../mobile/index.html";
  } else if (!isMobile && window.innerWidth < 600 && window.location.pathname !== "/mobile/index.html") {
    window.location.href = "../mobile/index.html";
  } else if (!isMobile && window.innerWidth >= 600 && window.location.pathname !== "/dist/index.html") {
    window.location.href = "../dist/index.html";
  }
}

function handleOrientationChange() {
  redirectBasedOnUserAgent();
}

window.addEventListener("orientationchange", handleOrientationChange);
window.addEventListener("resize", redirectBasedOnUserAgent);
redirectBasedOnUserAgent();
