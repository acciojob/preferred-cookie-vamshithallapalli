//your JS code here. If required.
// Helper: Get cookie by name
function getCookie(name) {
  const cookieArr = document.cookie.split(";");

  for (let cookie of cookieArr) {
    cookie = cookie.trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.split("=")[1];
    }
  }
  return null;
}

// Helper: Set cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

// Apply saved preferences (if any)
function applyPreferences() {
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) {
    document.documentElement.style.setProperty("--fontsize", savedSize + "px");
    document.getElementById("fontsize").value = savedSize;
  }

  if (savedColor) {
    document.documentElement.style.setProperty("--fontcolor", savedColor);
    document.getElementById("fontcolor").value = savedColor;
  }
}

// Handle form submit
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const size = document.getElementById("fontsize").value;
  const color = document.getElementById("fontcolor").value;

  // Save to cookies
  setCookie("fontsize", size);
  setCookie("fontcolor", color);

  // Apply changes immediately
  document.documentElement.style.setProperty("--fontsize", size + "px");
  document.documentElement.style.setProperty("--fontcolor", color);
});

// Load preferences on page load
applyPreferences();
