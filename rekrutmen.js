// Soal 2: Sistem Penerimaan Calon Programmer

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function seleksiProgrammer() {
  console.log("\nSoal 2: Sistem Penerimaan Calon Programmer");

  readline.question("Nama calon: ", (nama) => {
    readline.question("Nilai coding (0-100): ", (nilaiCodingStr) => {
      const nilaiCoding = parseFloat(nilaiCodingStr);
      if (isNaN(nilaiCoding) || nilaiCoding < 0 || nilaiCoding > 100) {
        console.log("Nilai coding harus antara 0 dan 100.");
        return readline.close();
      }

      readline.question("Nilai interview (huruf A/B/C/...): ", (nilaiInterview) => {
        const ni = nilaiInterview.trim().toUpperCase();

        let hasilCoding = "";
        if (nilaiCoding > 80) hasilCoding = "LOLOS";
        else if (nilaiCoding >= 60) hasilCoding = "DIPERTIMBANGKAN";
        else hasilCoding = "GAGAL";

        let hasilInterview = ni === "A" || ni === "B" ? "LOLOS" : "GAGAL";

        console.log(`Hasil coding: ${hasilCoding}`);
        console.log(`Hasil interview: ${hasilInterview}`);

        if (hasilInterview === "LOLOS" && (hasilCoding === "LOLOS" || hasilCoding === "DIPERTIMBANGKAN")) {
          console.log(`Selamat ${nama}, Kamu Berhasil Menjadi Calon Programmer`);
        } else {
          console.log(`Maaf ${nama}, Kamu Belum Berhasil Menjadi Calon Programmer`);
        }

        readline.close();
      });
    });
  });
}

seleksiProgrammer();
