let daftarSiswa = [
    { nama: "Rapunzel", nilai: 85, kelas: "A" },
    { nama: "Rama", nilai: 80, kelas: "A" },
    { nama: "Cinderella", nilai: 90, kelas: "B" },
    { nama: "Haikal", nilai: 95, kelas: "B" },
    { nama: "Raden", nilai: 70, kelas: "b" },
    { nama: "Budi", nilai: 75, kelas: "c" },
    { nama: "Galang", nilai: 60, kelas: "c" }
];

let namaKelas = daftarSiswa.map(siswa => siswa.nama + "-" + siswa.kelas);
console.log("Nama dan Kelas:", namaKelas);

let kelasA = daftarSiswa.filter(siswa => siswa.kelas === "A");
console.log("siswakelas A:", kelasA);

let rataratakelasA = daftarSiswa.reduce((total, siswa) => total + siswa.nilai, 0);
let nilairatarataKelasA = rataratakelasA / daftarSiswa.length
console.log("Rata rata nilai siswa Kelas A:", nilairatarataKelasA);