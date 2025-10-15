// Soal 1: Analisa Kemungkinan Anggota Mafia

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mafiaCheck() {
  console.log("\n Soal 1: Analisa Kemungkinan Anggota Mafia");

  readline.question("Nama: ", (nama) => {
    readline.question("Umur (angka): ", (umurStr) => {
      const umur = parseInt(umurStr);
      if (isNaN(umur)) {
        console.log("Umur harus angka.");
        return readline.close();
      }

      readline.question("Tempat Tinggal (kota): ", (tempat) => {
        tempat = tempat.toLowerCase();

        readline.question("Uang Tabungan dalam dollar (tanpa $): ", (tabunganStr) => {
          const tabungan = parseFloat(tabunganStr);
          if (isNaN(tabungan)) {
            console.log("Tabungan harus angka.");
            return readline.close();
          }

          const donKota = ["nevada", "new york", "havana"];
          const underbossKota = ["new jersey", "manhattan", "nevada"];
          const capoKota = ["california", "detroit", "boston"];

          let hasil = null;

          if (umur > 40 && donKota.includes(tempat) && tabungan > 10000000) {
            hasil = "Don";
          } else if (
            umur >= 25 &&
            umur <= 40 &&
            underbossKota.includes(tempat) &&
            tabungan >= 1000000 &&
            tabungan <= 2000000
          ) {
            hasil = "Underboss";
          } else if (
            umur >= 18 &&
            umur <= 24 &&
            capoKota.includes(tempat) &&
            tabungan < 1000000
          ) {
            hasil = "Capo";
          }

          if (hasil) {
            console.log(`${nama} kemungkinan adalah anggota mafia dengan pangkat ${hasil}.`);
          } else {
            console.log(`${nama} tidak mencurigakan.`);
          }

          readline.close();
        });
      });
    });
  });
}

mafiaCheck();
