// --- PREPARASI DATA ---
let angka = [1, 2, 3, 4, 5];
let buah = ["apel", "anggur", "sirsak"]; // Ditambahkan agar variabel 'buah' tidak error!
let kelas = [34, 36, 40];
let bunga = ["mawar", "anggrek", "lily"];

// --- 1. METODE ARRAY ---
console.log(angka);

// MAP
let dikali2 = angka.map((item) => item * 2);
console.log(dikali2);

// FILTER
let genap = angka.filter((item) => item % 2 === 0);
console.log(genap);

// FIND
let hasil = buah.find((item) => item[0] === "s");
console.log(hasil);

// REDUCE
console.log(kelas);
let seluruhAngkatan = kelas.reduce((siswa, totalSiswa) => siswa + totalSiswa, 0);
console.log(seluruhAngkatan);

// --- 2. PERULANGAN (LOOPING) ---
// FOREACH
bunga.forEach((item) => {
    console.log(item);
});

// FOR LOOP
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// WHILE LOOP
let password = "";
while (password !== "rahasia1") {
    password = "rahasia1";
}
console.log("password benar");