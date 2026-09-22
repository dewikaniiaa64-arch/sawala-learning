function cekData() {
    return new Promise((resolve, reject) => {
        const berhasil = false;
        if (berhasil) {
            resolve("data berhasil diambil");
        } else {
            reject("data tidak berhasil diambil");
        }
    });
}

async function tampilkanData() {
    try {
        const hasil = await cekData();
        console.log(hasil);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("proses selesai");
    }
}
tampilkanData();