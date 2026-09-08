let buah = ["apel", "anggur", "sirsak"]

console.log(buah[0]);
console.log(buah[1]);
console.log(buah[2]);
console.log(buah.length);

buah.push("pear")
console.log(buah);

buah.pop()
console.log(buah);

buah.unshift("cerry")
console.log(buah);

buah.shift()
console.log(buah)

let siswa = [
    { nama: "Nisa", kelas: 10, jurusan: "PPLG" },
    { nama: "Ridho", kelas: 10, jurusan: "PPLG" },
    { nama: "Snti", kelas: 10, jurusan: "MPLB" },
    { nama: "Nazwa", kelas: 10, jurusan: "Pemasaran" },
]

siswa.forEach((s) => {
    console.log(`Nama: ${s.nama}, Kelas: ${s.kelas}, Jurusan: ${s.jurusan}`)
})