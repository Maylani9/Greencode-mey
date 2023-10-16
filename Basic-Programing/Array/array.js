let wacana = ["meylani", "inne", "novi", "rindi"];
console.log(wacana[0]);
//perjumlahan number 1 itu index 2 + index 4 trus hasil nya 7
let number = [1, 2, 3, 4, 5];
let penjumlahan = number[1] + number[4];
console.log(penjumlahan);
//

//menghapus index contoh nya (delet data 2 )itu menghapus index ke 2 atau apple yg dihapus dan index 1 itu brp yang dihapus
const fruits = ["banana", "orange", "apple", "mango"];
function deleteData(index, arr) {
  arr.splice(index, 1);
}
deleteData(2, fruits);
console.log(fruits);
//
