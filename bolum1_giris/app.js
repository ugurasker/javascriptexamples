console.log("Hello Javascript");
console.log("Javascript javadan kolay bir dildir");
console.error("Bu bir hatadir");
console.warn("bu bir uyaridir");

//**** =================DEGISKEN TANIMLAMA ================
// var keyword ile degisken tanimlanabilir. ancak modern js var keyword
//kullanimi azaldi. cunku global degisken gibi dusunulmektedir.
var pi=3.14;
console.log(pi);
console.log(typeof pi);

pi="3";
console.log(pi);
console.log(typeof pi);

pi= true;
console.log(pi);
console.log(typeof pi);

isim= "Ahmet";
console.log(isim);
console.log(typeof isim);

isim=4;
console.log(isim);
console.log(typeof isim);

// const ve let yeni degisken tanimlama keywordleridir.

const piSayisi = 3.14;
console.log(piSayisi);

//piSayisi=3;
//console.log(piSayisi);   //hata verir !

//========== let ==========
//eger degiskenimizin degismesi gerekiyorsa let kullaniriz.
// let block scope, var is global scope tur.
// block scope sadece tanimli oldugu alanda gecerlidir.

let fiyat;
console.log(fiyat);
fiyat=5.5;
console.log(fiyat);

let isim1="Mustafa";
let isim2='Ahmet';
let isim3= `Alican`;

console.log(isim3);

const dil = null;
console.log(typeof dil);

const ad="Can";
const soyad="Canan";
console.log(ad + soyad);
console.log(ad+" "+soyad);

const x=5;
const y="5"
console.log(x+y);

const name="Mesut";
const yas=55;
console.log(`Benim adim ${name}, yasim ${yas}tir`);

const yil = 2021;
const dogumTarihi = 1980;
const sene = yil - dogumTarihi;
console.log("YAS:" + sene);
console.log("YAS:" + (yil - dogumTarihi));
console.log(`YAS:${yil - dogumTarihi} `);

const taban = 2;
const us= 3;
const rslt = taban ** us;
console.log(rslt);

const sayi=123;
const birler = sayi%10;
const onlar = Math.floor(sayi/10) % 10;
const yuzler =Math.floor(sayi/100);
console.log(yuzler);

const sayi1=100;
const sayi2="100";
console.log(sayi1==sayi2);
console.log(sayi1===sayi2); // veri tipini de kiyaslar

// 0 ,false, null .Nan ,"",undefined haricini true kabul eder

let s2= true;
let s1= false
s3= null;
console.log(s2&&s3);   // null dondurur.
console.log(s3&&s1);   // null
console.log(s1&&s3);   // false

//0, null, undefined ve NaN && ile kendini döndürüyor

//const age = prompt("Yasinizi giriniz"); default string olarak alir.
//const age=  +promt yaparsak veri tipi number olur
//const age = Number(promt(yas gir))
//const name2=prompt("adinizi giriniz");
//const age=Number(prompt("Yasinizi giriniz"));
//console.log( age>=18 ? `${name2} ehliyet alabilir`:`${name2} ehliyet alamaz`);

const sayi4= 41;

console.log(String(sayi4),sayi4);