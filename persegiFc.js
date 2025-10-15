// Soal 3 : Menentukan posisi pemain PERSEGI FC berdasarkan nomor punggung

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function cekPosisi() {
  console.log("\nPERSEGI FC - Pengecekan Nomor Punggung Pemain");

  readline.question("Masukkan nomor punggung pemain: ", (nomorStr) => {
    const nomor = parseInt(nomorStr);

    if (isNaN(nomor) || nomor <= 0) {
      console.log("Error: Nomor punggung harus angka positif!");
      return readline.close();
    }

    let posisi = [];

    // Aturan a: Genap → Target Attacker
    if (nomor % 2 === 0) {
      posisi.push("Target Attacker");
    }

    // Aturan b: Genap antara 50 – 100 → Captain Team
    if (nomor % 2 === 0 && nomor >= 50 && nomor <= 100) {
      posisi.push("Captain Team");
    }

    // Aturan c: Ganjil → Defender
    if (nomor % 2 !== 0) {
      posisi.push("Defender");
    }

    // Aturan d: Ganjil lebih dari 90 → Playmaker
    if (nomor % 2 !== 0 && nomor > 90) {
      posisi.push("Playmaker");
    }

    // Aturan e: Ganjil kelipatan 3 dan 5 → Keeper
    if (nomor % 2 !== 0 && nomor % 3 === 0 && nomor % 5 === 0) {
      posisi.push("Keeper");
    }

    console.log(`\nNomor punggung ${nomor} berfungsi sebagai:`);

    if (posisi.length === 0) {
      console.log("❌ Tidak memiliki posisi yang sesuai aturan.");
    } else {
      posisi.forEach((p, i) => {
        console.log(`${i + 1}. ${p}`);
      });
    }

    readline.close();
  });
}

cekPosisi();
