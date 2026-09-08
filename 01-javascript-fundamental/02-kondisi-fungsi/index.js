let daftarSiswa = [
    { nama: "Laura", nilai: 90 },
    { nama: "Libra", nilai: 80 },
    { nama: "Syifa", nilai: 95 },
    { nama: "Nathan", nilai: 70 },
    { nama: "AL", nilai: 68 },
    { nama: "Kim", nilai: 75 },
];


function hasilNilai(nilai, nama) {
    if (nilai >= 75) {
        console.log(`${nama} Naik Kelas`);
    } else {
        console.log(`${nama} Tidak Naik Kelas`);
    }
}

function naikKelas(nama, nilai) {
    if (nilai >= 85) {
        console.log(`${nama} - Kelas A`);
    } else if (nilai >= 75) {
        console.log(`${nama} - Kelas B`);
    } else {
        console.log(`${nama} - Kelas C`);
    }
}

daftarSiswa.forEach((siswa) => {
    hasilNilai(siswa.nilai, siswa.nama);
    naikKelas(siswa.nama, siswa.nilai);
    console.log("--------");
})

let nama = "Lisa";
let umur = 17;
let status = "Belum punya KTP";

if (umur >= 17 && status === "Legal sudah punya KTP") {
    console.log(`${nama} (${umur} tahun): Dapat Membuat SIM`);
} else {
    console.log(`${nama} (${umur} tahun): Tidak Dapat Membuat SIM`);
}


let hariMinggu = false;
let tanggalMerah = true;

if (hariMinggu === true || tanggalMerah === true) {
    console.log("Libur");
} else {
    console.log("Bekerja");
}


