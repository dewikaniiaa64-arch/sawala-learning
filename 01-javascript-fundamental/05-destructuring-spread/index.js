//destructuring array
let buah = ["mangga", "pisang", "apel"]
let [buah1, buah2] = buah;

console.log(buah1);
console.log(buah2);

//destructuring object
let siswa = { nama: "virgo", jurusan: "pplg" };
let { nama, jurusan } = siswa;

console.log(nama);
console.log(jurusan);

//spread operator array
let minuman = ["kopi", "teh", "susu"];
let makanan = ["roti", "mie", "nasi padang"];
let semuaProduk = [...minuman, ...makanan];
console.log(semuaProduk);

//spread operator object
let penduduk = { nama: "sagi", umur: 18 };
let dataBaru = { ...penduduk, status: "mahasiswa" }
console.log(dataBaru)

