// Menggunakan if, else, dan nested if
let nilai = 85;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else {
  console.log("Nilai Anda C");
}

// Menggunakan switch case
let hari = "Senin";
let aktivitas = "";

switch (hari) {
  case "Senin":
    aktivitas = "Meeting pagi";
    break;
  case "Selasa":
    aktivitas = "Pelatihan";
    break;
  case "Rabu":
    aktivitas = "Rapat tim";
    break;
  default:
    aktivitas = "Istirahat";
}

console.log(`Hari ${hari}, aktivitas: ${aktivitas}`);

// Menggunakan for statement
for (let i = 1; i <= 5; i++) {
  console.log(`Iterasi ke-${i}`);
}

// Menggunakan while
let count = 0;
while (count < 5) {
  console.log(`Perulangan ke-${count}`);
  count++;
}

// Menggunakan do while
let angka = 1;
do {
  console.log(`Angka ke-${angka}`);
  angka++;
} while (angka <= 3);

// Menggunakan function
function tambah(a, b) {
  return a + b;
}

let hasilPenambahan = tambah(5, 3);
console.log(`Hasil penambahan: ${hasilPenambahan}`);
