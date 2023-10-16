//dalam array nya dikalikan misal 2*2=4 3*3=9 dan sebagainya atau bisa disebut hasil perkalian
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
console.log(newArr);
//

//dalam array dikalikan 10 misal 65*10=650 dan sebagainya
const numbers2 = [65, 44, 12, 4];
const newArr2 = numbers2.map(myFunction);

function myFunction(num) {
  return num * 10;
}
console.log(newArr2);
//

//untuk ngeprint isi secara 1 data 1 data kebawah
const numbers3 = [4, 9, 16, 25];
let tes = numbers3.map(function (input) {
  console.log(input);
});
//
