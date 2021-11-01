
/*const koordinatlar =[120,100,-100,220,330];
let negatif =0;
let pozitif=0;
  for (let i=0;i<koordinatlar.length;i++) {
      if (koordinatlar[i]>0){
          pozitif++;
      }else {
          negatif++;
      }
  }
  console.log(pozitif+" "+negatif);


  //===================for in======================
  for (let i in koordinatlar) {
    koordinatlar[i] < 0 ? negatif++ : pozitif++;  
  }   */
  //---------------------------------------------------------------
// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin bir dizide
// saklandığı varsayalım.Bu hayvanları türüne göre aramamızı sağlayacak
// ve o türden kaç adet bulunduğu ana programa döndürecek fonksiyonu
// yazınız. Eğer o türden bir hayvan yok ise bulunamdığını yazdırsın.
//----------------------------------------------------------------

/*const hayvanlar= ["fil","deve","kus","deve","fare","kedi","deve"];
const ara = prompt("aramak istenilen havyan turu");
const bulDondur = function(ara) {
  let counter=0;
for (let i in hayvanlar) {
  
  
  if (hayvanlar[i]==ara )
  counter++;
    


}
return counter;
};

const sayi = bulDondur(ara);
sayi==0? console.log("aradiginiz hayvan bulunamadi"): console.log(`Aradiginiz ${ara} den ${sayi} adet bulunmaktadir`);
*/
//  =========   FOR OF DONGUSU ===========
// for of dongusu for in dongusunun bir cok veri yapisini
// kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icersindeki 
//veriye erisirken indisleme kullanmaya gerek yoktur.
let arabalar =["BMW","Volvo","Mini"]
let yazi="";
for (let i of arabalar) {
  yazi+= i + " ";
}
console.log(yazi);


//========for each dongusu===========//
let ogrenciler =["john","ali","can"];

function yazdir(a) {
  console.log(a);
}
ogrenciler.forEach(yazdir);
ogrenciler.forEach((x)=>console.log(x));


//toplama ornegi

/* const fiyatlar =[200,300,125,450,333];

let toplam=0
fiyatlar.forEach((x)=>toplam+=x);
document.querySelector(".toplam").innerHTML=toplam+" tl"; 
*/


const fiyatlar =[200,300,125,450,333];

let toplam=0
fiyatlar.forEach((f,i,d)=>{
  toplam+=f;
console.log(`${i}. iterasyon ${toplam}`);
;
})
document.querySelector(".toplam").innerHTML=toplam+" tl";

//fiyatlar dizisinde her fiyata % 10 zam yapalim

const yenifiyat=[]; 
 let yeniToplam=0;
fiyatlar.forEach((d,i) => {
  yenifiyat[i]=(d*1.10).toFixed(2);
  yeniToplam += Number(yenifiyat[i]);
})
console.log(yenifiyat);
console.log(yeniToplam);


/* fiyatlar.forEach((deger,indis.dizi) => dizi[indis] = deger*1.1 */

/*============== MAP metodu====================*/
const rakamlar = [3 ,5 ,3,2,6,7,9];
const ikiKat = rakamlar.map((x) => x*2 );
console.log(ikiKat, rakamlar)


const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

const buyuk= isimler.map((isim) => isim.toUpperCase());
console.log(buyuk);


//dolar euro hesap

tlFiyatlar = [120,340,550,245,322.5,789];



const dolarKur = document.querySelector(".dolar");
const euroKur = document.querySelector(".euro");
const dolar = document.querySelector(".dolar-fiyat");
const euro = document.querySelector(".euro-fiyat")



dolarKur.onchange = function () {
const dolarfiyatlar= tlFiyatlar.map((x) => x/dolarKur.value);

dolar.innerHTML= dolarfiyatlar;

};

euroKur.onchange = function () {
  const eurofiyatlar= tlFiyatlar.map((x) => x/euroKur.value);
  euro.innerHTML= eurofiyatlar;

};
 

const zamlifiyatlar =tlFiyatlar.map((d,indis) => {
   if (d > 250)
   return `${indis+1}. urunun zamli fiyati: ${ d*1.2} <br>`;
   else 
  return `${indis+1}. urunun zamli fiyati: ${ d*1.1} <br>`;

} )
// virgulsuz yazmak icin;
const stringzamlifiyatlar=zamlifiyatlar.join("");
document.querySelector(".zamli-fiyat").innerHTML = stringzamlifiyatlar;
console.log(zamlifiyatlar);

const kucuk350 = tlFiyatlar.filter((x) => x<350 );
console.log(kucuk350);


// kucukten buyuge siralama... 
tlFiyatlar.sort( (a,b) => a-b);
console.log(tlFiyatlar);

//===========PIPELINE METODU===============

// maasi 4bin ve asagisi % 10 zam
const maaslar =[3000, 5000, 4000, 6000, 6500];

const zamlimaaslar = maaslar.filter((x) => x<=4000)
.map((x) => x*1.5);
console.log(zamlimaaslar);
maaslar.filter((x) => x>4000).map(x=>x*1.2)
.forEach((x)=>console.log(x));


const adlar = ["Samet", "Hakki","Duygu","Emrullah","Bilal", "Ali","Ahmet","Hasan","Defne","Serdar"];


const isimbul = (harf) => {
  const buyukHarf = harf.toUpperCase();
  adlar.filter((a)=>a.startsWith(buyukHarf))
  .forEach((a) => console.log(a));

}

isimbul("a");
//================REDUCE methodu==========

console.log(maaslar.reduce((x,y) => x+y));

// su alttaki nedir a.q ?

const toplamMaas = maaslar.reduce((x,y,i) => {
  console.log(`${i} iterasyon: ${x}`)
  return x+y ;

} )
const buyukDort = maaslar
  .filter((m) => m >= 4000)
   .reduce((x, y) => x + y);
console.log(buyukDort);

const ortalamaMaas = maaslar.reduce( (x,y) => x+y)/maaslar.length;
console.log(ortalamaMaas);
const yeniMaaslar = maaslar.filter( (m) => m >= ortalamaMaas)
.map( (m) => m*1.1);
console.log(yeniMaaslar);