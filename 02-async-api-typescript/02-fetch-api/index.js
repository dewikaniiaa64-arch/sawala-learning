async function ambilData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
            throw new Error("Gagal mengambil data");
        }
        const data = await response.json()
        console.log("Nama:", data[0].name);
    } catch (error) {
        console.log("Terjadi error:", error.message);
    }
    finally {
        console.log("proses selesai");
    }
}
ambilData();