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
