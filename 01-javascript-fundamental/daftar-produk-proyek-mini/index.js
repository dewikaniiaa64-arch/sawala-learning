import readline from "readline";



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