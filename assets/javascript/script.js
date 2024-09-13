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

function detectBrowser() {
  const userAgent = navigator.userAgent;

  let browserName;
  let browserVersion;

  if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Mozilla Firefox";
    browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
  } else if (
    userAgent.indexOf("Chrome") > -1 &&
    userAgent.indexOf("Edg") === -1
  ) {
    browserName = "Google Chrome";
    browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
  } else if (
    userAgent.indexOf("Safari") > -1 &&
    userAgent.indexOf("Chrome") === -1
  ) {
    browserName = "Apple Safari";
    browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
    browserName = "Opera";
    browserVersion =
      userAgent.match(/Opera\/(\d+\.\d+)|OPR\/(\d+\.\d+)/)[1] ||
      userAgent.match(/OPR\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("MSIE") > -1 || !!document.documentMode) {
    browserName = "Internet Explorer";
    browserVersion = userAgent.match(/MSIE (\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Edg") > -1) {
    browserName = "Microsoft Edge";
    browserVersion = userAgent.match(/Edg\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Edge") > -1) {
    browserName = "Microsoft Edge Legacy";
    browserVersion = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
  } else {
    browserName = "Unknown";
    browserVersion = "Unknown";
  }

  document.getElementById("browser").textContent = browserName;
  document.getElementById("version").textContent = browserVersion;
}

detectBrowser();

fetch("https://ipwhois.app/json/")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("ispInfo").innerHTML = `${data.isp}`;
  })
  .catch((error) => {
    document.getElementById("ispInfo").innerHTML = "Tidak dapat mendeteksi ISP";
    console.error("Error:", error);
  });
