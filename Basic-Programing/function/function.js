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
