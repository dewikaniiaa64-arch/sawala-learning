function tokoRoti(pesanan) {
    return new Promise(function (resolve, reject) {
        console.log("pesanan sedang di proses")
        setTimeout(() => {

            if (pesanan === "Roti Coklat") {
                resolve("Selamat Menikmati Hidangan Anda ><");
            } else {
                reject("maaf stok roti coklat sudah habis!");
            }
        }, 3000);
    });
};

async function prosesPesanan(pesanan) {
    try {
        const hasil = await tokoRoti("Roti Coklat");
        console.log(hasil);
    } catch (error) {
        console.log("pemesanan gagal:", error);
    }
    finally {
        console.log("proses selesai");
    }
}

prosesPesanan();