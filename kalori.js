// Soal 4: Kalkulator Kalori Berdasarkan Jenis Olahraga

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function kalkulatorKalori() {
  console.log("\nSoal 4: Kalkulator Kalori Olahraga");
  console.log("1 - Lari (60 kal per 5 menit)");
  console.log("2 - Push-up (200 kal per 30 menit)");
  console.log("3 - Plank (5 kal per 1 menit)");

  const kaloriPerMenit = {
    "1": 60 / 5,
    "2": 200 / 30,
    "3": 5 / 1,
  };

  readline.question("Berapa jenis aktivitas dilakukan? ", (jumlahStr) => {
    const jumlah = parseInt(jumlahStr);
    if (isNaN(jumlah) || jumlah <= 0) {
      console.log("Input harus angka positif.");
      return readline.close();
    }

    let totalKal = 0;
    let aktivitasKe = 1;

    function nextAktivitas() {
      if (aktivitasKe > jumlah) {
        console.log(`\nTotal kalori terbakar: ${totalKal.toFixed(2)} kkal`);
        return readline.close();
      }

      console.log(`\nAktivitas ke-${aktivitasKe}:`);
      readline.question("Pilih tipe olahraga (1/2/3): ", (tipe) => {
        if (!kaloriPerMenit[tipe]) {
          console.log("Tipe olahraga tidak valid.");
          aktivitasKe++;
          return nextAktivitas();
        }

        readline.question("Durasi dalam menit: ", (durasiStr) => {
          const durasi = parseFloat(durasiStr);
          if (isNaN(durasi) || durasi < 0) {
            console.log("Durasi harus angka positif.");
            aktivitasKe++;
            return nextAktivitas();
          }

          const kal = kaloriPerMenit[tipe] * durasi;
          console.log(`Kalori terbakar: ${kal.toFixed(2)} kkal`);
          totalKal += kal;

          aktivitasKe++;
          nextAktivitas();
        });
      });
    }

    nextAktivitas();
  });
}

kalkulatorKalori();
