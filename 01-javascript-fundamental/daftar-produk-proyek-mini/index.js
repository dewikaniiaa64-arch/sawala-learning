import readline from "readline";

let daftarProduk = [
  { nama: "Kemeja Raya", kategori: "Kemeja", harga: "50000" },
  { nama: "Celana Alladin", kategori: "Celana", harga: "70000" },
  { nama: "Kaos Indomie", kategori: "Kaos", harga: "25000" },
  { nama: "Rok Macan Tutul", kategori: "Rok", harga: "40000" },
  { nama: "Pashmina Dubay shawl", kategori: "Jilbab", harga: "100000" },
];

console.log("Daftar Produk:", daftarProduk);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Cari produk (kategori): ", (kataKunci) => {
  let hasilFilter = daftarProduk.filter(produk =>
    produk.kategori.toLowerCase().includes(kataKunci.toLowerCase())
  );

  console.log("\nHasil pencarian untuk '" + kataKunci + "':");
  hasilFilter.forEach(produk => {
    console.log(`${produk.nama} - ${produk.kategori} - Rp${produk.harga}`);
  });
  rl.close();
});