// Menggunakan API ip-api.com untuk mendapatkan alamat IP dan lokasi
// Menggunakan API ipify untuk mendapatkan alamat IP pengguna
fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("ip").textContent = data.ip;
  })
  .catch((error) => {
    console.error("Gagal mendapatkan IP:", error);
  });

const isMobile = /Mobi|Android/i.test(navigator.userAgent);
document.getElementById("device").textContent = isMobile ? "Mobile" : "Desktop";

function detectOS() {
  let userAgent = window.navigator.userAgent;
  let platform = window.navigator.platform;
  let os = "Tidak Diketahui";

  // Pendeteksian sistem operasi
  if (platform.indexOf("Win") !== -1) {
    os = "Windows";
  } else if (platform.indexOf("Mac") !== -1) {
    os = "MacOS";
  } else if (
    platform.indexOf("Linux") !== -1 ||
    platform.indexOf("X11") !== -1
  ) {
    os = "Linux";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (/iPhone|iPad|iPod/.test(userAgent)) {
    os = "iOS";
  }

  return os;
}

// Tampilkan sistem operasi ke dalam elemen HTML
document.getElementById("os").textContent = detectOS();

const screenWidth = screen.width;
const screenHeight = screen.height;
document.getElementById(
  "resolution"
).textContent = `${screenWidth} x ${screenHeight}`;

if (navigator.connection) {
  const connectionType = navigator.connection.effectiveType;
  document.getElementById("network").textContent = `${connectionType}`;
} else {
  document.getElementById("network").textContent =
    "Informasi jaringan tidak tersedia.";
}

const language = navigator.language;
document.getElementById("language").textContent = `${language}`;
