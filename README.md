DANIS SETIAWATI

20240040053

---

📦 logika-percabangan-js

 ┣ 📜 persegiFc.js
 
 ┣ 📜 disney.js
 
 ┣ 📜 diskon.js
 
 ┣ 📜 gaji.js
 
 ┣ 📜 rekrutmen.js
 
 ┗ 📜 README.md

---

# 🧠 Dasar Pemrograman JavaScript: Percabangan, Perulangan, dan Array

Dokumen ini berisi ringkasan konsep dasar dalam pemrograman menggunakan **JavaScript (Node.js)**, yaitu:
1. **Kondisi Percabangan (Conditional Statements)**
2. **Perulangan (Looping)**
3. **Array (Kumpulan Data)**

Ketiga konsep ini merupakan **pondasi utama** dalam membangun logika program, baik sederhana maupun kompleks.

---

## ⚙️ 1. Kondisi Percabangan (Conditional Statements)

Percabangan digunakan untuk **mengambil keputusan** berdasarkan kondisi tertentu.  
Struktur umum:
```javascript
if (kondisi) {
  // kode yang dijalankan jika kondisi benar
} else {
  // kode yang dijalankan jika kondisi salah
}

```
Percabangan juga dapat menggunakan struktur switch jika kondisi yang diuji berupa nilai pasti.

```javascript
let hari = "Senin";
switch (hari) {
  case "Senin":
    console.log("Awal minggu");
    break;
  case "Jumat":
    console.log("Menjelang akhir minggu");
    break;
  default:
    console.log("Hari biasa");
}
```
| Jenis          | Fungsi                                   |
| -------------- | ---------------------------------------- |
| `if`           | Menjalankan satu kondisi jika benar      |
| `if...else`    | Menjalankan dua kondisi berbeda          |
| `if...else if` | Mengevaluasi beberapa kondisi bertingkat |
| `switch`       | Cocok untuk banyak kondisi tetap (case)  |

---

🔁 Perulangan (Looping)

Perulangan digunakan untuk menjalankan perintah berulang kali tanpa menulis kode yang sama berkali-kali. Terdapat beberapa jenis perulangan utama:

```javascript
// for loop
for (let i = 1; i <= 5; i++) {
  console.log(`Perulangan ke-${i}`);
}

// while loop
let x = 1;
while (x <= 3) {
  console.log("Nilai x:", x);
  x++;
}

// do...while loop
let y = 5;
do {
  console.log("Nilai y:", y);
  y++;
} while (y < 5);

// for...of loop (khusus untuk array)
const warna = ["Merah", "Hijau", "Biru"];
for (let w of warna) {
  console.log(w);
}
```

| Jenis        | Fungsi                                     |
| ------------ | ------------------------------------------ |
| `for`        | Digunakan saat jumlah perulangan diketahui |
| `while`      | Berulang selama kondisi benar              |
| `do...while` | Selalu dijalankan minimal satu kali        |
| `for...of`   | Iterasi langsung pada elemen array         |

---

🧩 Array (Kumpulan Data)

Array digunakan untuk menyimpan banyak nilai dalam satu variabel. Setiap elemen memiliki indeks yang dimulai dari 0.

```javascript
let buah = ["Apel", "Jeruk", "Pisang"];
console.log(buah[0]); // Apel
console.log(buah[2]); // Pisang

// Mengubah nilai elemen
buah[1] = "Mangga";
console.log(buah); // ["Apel", "Mangga", "Pisang"]

// Menambah dan menghapus elemen
buah.push("Anggur");   // Tambah di akhir
buah.unshift("Melon"); // Tambah di awal
buah.pop();            // Hapus elemen terakhir
buah.shift();          // Hapus elemen pertama

// Menampilkan seluruh elemen dengan perulangan
for (let item of buah) {
  console.log(item);
}

```

Array juga dapat berisi objek (array of object) agar data lebih kompleks.

```javascript
const siswa = [
  { nama: "Andi", nilai: 90 },
  { nama: "Budi", nilai: 80 },
  { nama: "Citra", nilai: 95 }
];

for (let s of siswa) {
  console.log(`${s.nama} mendapat nilai ${s.nilai}`);
}

```

Kesimpulan Umum

| Konsep          | Tujuan                                                  | Contoh Penggunaan                                 |
| --------------- | ------------------------------------------------------- | ------------------------------------------------- |
| **Percabangan** | Mengambil keputusan berdasarkan kondisi tertentu        | Menentukan status, kategori, atau tarif           |
| **Perulangan**  | Mengulang eksekusi perintah secara efisien              | Menampilkan data berulang atau menghitung total   |
| **Array**       | Menyimpan dan mengelola banyak data dalam satu variabel | Daftar nama, nilai siswa, produk, atau objek data |

---

🧑‍💻 Catatan Tambahan

Gunakan percabangan untuk membuat program mampu berpikir logis.

Gunakan perulangan agar program lebih efisien dan tidak redundan.

Gunakan array untuk menyimpan banyak data secara terstruktur.

Kombinasikan ketiganya untuk membangun aplikasi yang dinamis dan cerdas
