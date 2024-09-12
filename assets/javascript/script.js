// Menggunakan API ip-api.com untuk mendapatkan alamat IP dan lokasi
fetch("http://ip-api.com/json/")
  .then((response) => response.json())
  .then((data) => {
    // Menampilkan alamat IP
    document.getElementById("ip").textContent = data.query;

    // Menampilkan informasi lokasi (kota, wilayah, negara)
    document.getElementById("lokasi").textContent = data.city;
    document.getElementById("region").textContent = data.regionName;
    document.getElementById("country").textContent = data.country;

    // Menampilkan latitude dan longitude
    document.getElementById("latlng").textContent = `${data.lat}, ${data.lon}`;
  })
  .catch((error) => {
    document.getElementById("ip").textContent = "Gagal mendapatkan IP";
    document.getElementById("lokasi").textContent = "Gagal mendapatkan lokasi";
    document.getElementById("region").textContent = "Gagal mendapatkan wilayah";
    document.getElementById("country").textContent = "Gagal mendapatkan negara";
    document.getElementById("latlng").textContent =
      "Gagal mendapatkan koordinat";
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
