const ambilData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data berhasil diambil")
    }, 3000)
});

async function tampilkanData() {
    try {
        const hasil = await ambilData
        console.log(hasil)
    } catch (error) {
        console.log(error)
    }

    finally {
        console.log("proses selesai")
    }
}
tampilkanData();

