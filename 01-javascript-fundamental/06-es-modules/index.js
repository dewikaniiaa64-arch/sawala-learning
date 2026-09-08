import readline from "readline";
import { tambah, kurang, kali, bagi } from "./operasi.js"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan angka pertama;", (angka1) => {
    rl.question("masukan operator(+, -,*,/): ", (operator) => {
        rl.question("masukan angka kedua;", (angka2) => {
            let a = parseFloat(angka1);
            let b = parseFloat(angka2);
            let hasil;

            if (operator === "+") {
                hasil = tambah(a, b);
            } else if (operator === "-") {
                hasil = kurang(a, b);
            } else if (operator === "*") {
                hasil = kali(a, b);
            } else if (operator === "/") {
                hasil = bagi(a, b);
            } else {
                hasil = "operator tidak diketahui";
            }
            console.log(`hasil: ${hasil}`);
            rl.close();
        });
    });
});