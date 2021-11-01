// * =======================================================
// *                    FONKSİYONLAR
// * =======================================================
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// Fonksiyonun tanımlanması
function yazdir() {
    console.log("Ahmet");
  }
  yazdir(); // Fonks. çağrılması
  // Örnek: Parametreli Fonksiyon
  function yazdirAd(ad, yas) {
    console.log(`Adiniz ${ad} Yasiniz ${yas}`);
  }
  yazdirAd("Mustafa", 23); // Call | invoke
  yazdirAd("John", 21); // call | invoke
  function yasHesapla(dogum){
  }

  // Örnek: Parametreli, dönüş değerli Fonksiyon
function yasHesapla(dogum) {
    return 2021 - dogum;
  }
  console.log(`Yasiniz: ${yasHesapla(1990)}`);
  //alert(`Yasiniz: ${yasHesapla(1910)}`);
  const yas = yasHesapla(1995);
  console.log(`Yasiniz: ${yas}`);

  // Örnek: Klavyeden girilen sayinin tek veya cift oldugunu donduren bir fonksiyon yaziniz.
//const sayiniz = prompt("Sayinizini giriniz:");
// Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.
//console.log(tekCift(sayiniz));
//function tekCift(sayiniz) {
   // const sonuc = sayiniz % 2 == 0 ? `${sayiniz} Çifttir` : `${sayiniz} Tektir`;
    //return sonuc;
 // }

  

  // ! 2. YONTEM FUNCTION EXPRESSION

  const tekCift1 = function (sayiniz) {
     return sayiniz % 2 == 0 ? "Cift":"Tek"
  }
  console.log(tekCift1(5));

  // ! 3. YONTEM ARROW () FONKSIYONLARI

  const topla = (x,y) => (x+y);

  console.log(topla(5,2));

  // Ornek 
 const ciftMi = (sayi) => (sayi % 2 == 0 ? "çift" : "tek");
 console.log(ciftMi(5));
 console.log(ciftMi(2));

 // Ornek: Us alma
//const taban = prompt("taban giriniz");
//const us = prompt("us giriniz");
//const usAl = (t, u) => t ** u;
//console.log(usAl(taban, us));

 //ornek menu
 // arrow functionda birden fazla expression varsa {} kullanmak gerekir.
 const menu = ()=> {
 console.log("================");
 console.log(" java dersi");
 console.log("=================");
};
menu();

//ornek

const bilgiVer = (ad,soyad,dogum) =>{
    const bilgi = `Adim ${ad}, soyadim ${soyad} ve yasim ${2021-dogum} `
    return bilgi;
};
console.log(bilgiVer("Mehmet","Cakmak",1980));

const bilgiVer1 = (ad, soyad, dogum) =>
  `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;
console.log(bilgiVer1("Mehmet", "Cakmak", 1989));

//const r = prompt("yaricapi giriniz");
//const h = prompt("yukseklik giriniz");
//const hacimHesapla = (r,h) => Math.PI * r * r * h ;
//console.log("silindirin hacmi: " + Math.round(hacimHesapla(r,h)));
//console.log("silindirin hacmi: " +hacimHesapla(r,h).toFixed(2));   virgulden sonra 2 basamak
