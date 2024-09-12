// Menggunakan API ipify untuk mendapatkan alamat IP pengguna
fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("ip").textContent = data.ip;
  })
  .catch((error) => {
    console.error("Gagal mendapatkan IP:", error);
  });
function detectDevice() {
  var userAgent = navigator.userAgent;

  if (/android/i.test(userAgent)) {
    return "Android";
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return "iOS";
  } else if (/Windows/i.test(userAgent)) {
    return "Windows";
  } else if (/Macintosh/i.test(userAgent)) {
    return "MacOS";
  } else if (/Linux/i.test(userAgent)) {
    return "Linux";
  } else {
    return "Perangkat tidak diketahui";
  }
}

// Menampilkan tipe perangkat di halaman
document.getElementById("os").textContent = detectDevice();

function detectDeviceType() {
  var userAgent = navigator.userAgent;

  if (/Mobi|Android/i.test(userAgent)) {
    return "Mobile";
  } else {
    return "Desktop";
  }
}

// Menampilkan tipe perangkat di halaman
document.getElementById("device").textContent = detectDeviceType();
// Mendapatkan resolusi layar pengguna
var screenWidth = window.screen.width;
var screenHeight = window.screen.height;

// Menampilkan resolusi layar di halaman
document.getElementById("resolution").textContent =
  screenWidth + " x " + screenHeight + " piksel";

// Mengecek apakah Network Information API didukung oleh browser
if ("connection" in navigator) {
  var connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  var type = connection.effectiveType;

  // Menampilkan jenis koneksi
  document.getElementById("connection").textContent = type;
} else {
  document.getElementById("connection").textContent =
    "Network Information API tidak didukung oleh browser ini.";
}

// Menggunakan API ipapi untuk mendapatkan data lokasi berdasarkan IP
fetch("https://ipapi.co/json/")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("negara").textContent = data.country_name;
    document.getElementById("wilayah").textContent = data.region;
  })
  .catch((error) => {
    document.getElementById("negara").textContent = "Gagal memuat negara.";
    document.getElementById("wilayah").textContent = "Gagal memuat wilayah.";
    console.error("Error:", error);
  });

// Mendapatkan bahasa browser pengguna
const browserLanguage = navigator.language || navigator.userLanguage;
document.getElementById("browser-language").textContent = browserLanguage;
