function perkalian(angka1, angka2, angka3) {
  return angka1 * angka2 * angka3;
}
let varPerkalian = perkalian(2, 3, 4);
console.log(varPerkalian);

const namaku = function (nama) {
  console.log("hallo namaku", nama);
};
namaku("meylani");

function pengurangan(a, b) {
  return a - b;
}
function penjumlahan(a, b) {
  return a + b;
}
function kalkulasi(a, b, fungsi) {
  return fungsi(a, b);
}
console.log(kalkulasi(3, 5, pengurangan));

function Pembagian(a, b) {
  return a / b;
}
//let VarPembagian = Pembagian(10, 2);
console.log(Pembagian(10, 2));

function angka(angkaAwal, angkaAkhir) {
  for (let index = 1; index <= 20; index++) {
    console.log(index);
  }
}
angka(1, 20);

function pangkat2(angka) {
  return angka * angka;
}
console.log(pangkat2(8));
