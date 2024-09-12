// Menggunakan API ipify untuk mendapatkan alamat IP pengguna
fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("ip").textContent = data.ip;
  })
  .catch((error) => {
    console.error("Gagal mendapatkan IP:", error);
  });
