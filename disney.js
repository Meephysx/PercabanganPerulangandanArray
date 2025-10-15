// Soal5 : Menghitung tarif masuk wahana Disney Island berdasarkan umur dan tinggi anak

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function hitungTarif() {
  console.log("\nDISNEY ISLAND - PENENTUAN TARIF MASUK ANAK");

  readline.question("Masukkan nama anak: ", (nama) => {
    readline.question("Masukkan umur anak (tahun): ", (umurStr) => {
      const umur = parseFloat(umurStr);

      if (isNaN(umur) || umur < 0) {
        console.log("error: Umur harus angka positif!");
        return readline.close();
      }

      readline.question("Masukkan tinggi anak (cm): ", (tinggiStr) => {
        const tinggi = parseFloat(tinggiStr);

        if (isNaN(tinggi) || tinggi < 0) {
          console.log("error: Tinggi harus angka positif!");
          return readline.close();
        }

        let tarif = 0;
        let tambahan = 0;
        let keterangan = "";

        // Kondisi sesuai ketentuan
        if (umur < 1) {
          keterangan = "Dilarang masuk";
        } else if (umur < 3) {
          tarif = 30000;
          if (umur >= 2 && tinggi > 70) {
            tambahan = 10000;
          }
        } else if (umur < 7) {
          tarif = 40000;
          if (umur >= 4 && tinggi > 120) {
            tambahan = 15000;
          }
        } else if (umur < 10) {
          tarif = 50000;
          if (umur >= 8 && tinggi > 150) {
            tambahan = 20000;
          }
        } else {
          tarif = 80000;
        }

        if (keterangan === "Dilarang masuk") {
          console.log(`\nNama Anak : ${nama}`);
          console.log("Status     : error : Dilarang masuk (umur di bawah 1 tahun)");
        } else {
          const total = tarif + tambahan;
          console.log(`\nNama Anak : ${nama}`);
          console.log(`Umur      : ${umur} tahun`);
          console.log(`Tinggi    : ${tinggi} cm`);
          console.log(`Tarif Dasar : Rp ${tarif.toLocaleString("id-ID")}`);
          console.log(`Tambahan    : Rp ${tambahan.toLocaleString("id-ID")}`);
          console.log(`Total Bayar : Rp ${total.toLocaleString("id-ID")}`);
        }

        readline.close();
      });
    });
  });
}

hitungTarif();
