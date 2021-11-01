// const s1 = Number(prompt("Birinci sayi"));
// const islem = prompt("islemi giriniz");
// const s2 = Number(prompt("Ikinci sayi"));
// let sonuc = 0;
// if (islem === "+") {
//   sonuc = s1 + s2;
// } else if (islem === "-") {
//   sonuc = s1 - s2;
// } else if (islem === "*") {
//   sonuc = s1 * s2;
// } else if (islem === "/") {
//   // if (!s2) {
//   //   alert("bolen 0 olamaz");
//   // } else {
//   //   sonuc = s1 / s2;
//   // }
//   sonuc = s1 / s2;
// } else {
//   alert("yanlis islem yaptiniz");
// }
// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

// const age = Number(prompt("yasinizi giriniz"));
// const healty = prompt("saglikli misiniz e/h");
// alert(age > 18 && healty === "e" ? "askere gidebilir" : "Askere gitmesin");
// const result =
//   age > 18 && healty === "e" ? "askere gidebilir" : "Askere gitmesin";
// console.log(result);
// alert(result);
//*SWITCH CASE
// const gunNo = Number(prompt("Gun nosunu giriniz"));
// switch (gunNo) {
//   case 1:
//     gün = "Pazartesi";
//     break;
//   case 2:
//     gün = "Salı";
//     break;
//   case 3:
//     gün = "Çarşamba";
//     break;
//   case 4:
//     gün = "Perşembe";
//     break;
//   case 5:
//     gün = "Cuma";
//     break;
//   case 6:
//     gün = "Cumartesi";
//     break;
//   case 7:
//     gün = "Pazar";
//     break;
//   default:
//     alert("Gün 1-7 arasında olmalıdır");
//     break;
// }
// console.log(gün);
// const hız = 90;
// const mesaj = hız >= 120 ? "Hızlı" : "Yavaş";
// console.log(mesaj);
// const mesaj1 = hız >= 120 ? "Hızlı" : hız >= 90 ? "Normal" : "Yavaş";
// console.log(mesaj1);
//const maas = prompt("maasi giriniz");
//const calismaSuresi = prompt("Calisma suresini giriniz");
//const zamlimaas =
 // calismaSuresi > 10 ? maas * 1.5 : calismaSuresi > 5 ? maas * 1.2 : maas * 1.1;
//console.log(zamlimaas);

const borc=0;
const maas = 3000;
console.log(!borc&&maas >2825 ? "kredi alir ":"kredi alamaz");

// DÖNGÜLER
// const sayi = prompt("Dongu miktarini giriniz:");
// for (let i = 1; i <= sayi; i++) {
//   console.log(`${i}-Mehmet`);
// }
// Asal sayı tespiti
//const number = Number(prompt("Sayiyi giriniz:"));
//let asal = true;
//for (let i = 2; i < number; i++) {
 // if (number % i == 0) {
 //   asal = false;
 //   break;
 // }
//}
//const sonuc = asal ? "ASAL" : "ASAL DEGIL";
//console.log(sonuc);


let not;
while(true) {
not = prompt("0-100 arasında bir not giriniz:");
if (not > 0 && not < 100) {
  console.log("Giridiğiniz not 0-100 arasındadır");
  break;
}

console.log("Giridiğiniz not 0-100 arasında degildir");
}


