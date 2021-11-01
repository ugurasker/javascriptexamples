
const dogum =1980;
const yaslar = [30,25,44,77];

const isimler =["ahmet","mustafa","can","bekir","ayse",20,40,true,23.4,2021-dogum,yaslar];
console.log(isimler);

console.log(isimler[0]);
console.log(isimler[3] = "canan");
console.log(isimler);

isimler[isimler.length-2] = false;
console.log(isimler);

console.log(isimler[10][1]);

isimler[11]="Ipek";
console.log(isimler);

// ========= DİZİYİ DEĞİŞTİREN METOTLAR ==============
const h1=document.getElementById("meyveler")
let meyveler = ["elma","armut","muz","kivi"];
meyveler.pop(); // son elemani sil

const boyut = meyveler.push("cilek", "karpuz"); // sona eleman ekler 
//son eleman sayisini dondurur.
console.log(boyut);

//dizinin0. indexine eleman ekler ve eleman sayisini dondurur.
const boyut1 = meyveler.unshift("ayva");
console.log(boyut1);

//0. indexi silip , dondurur.
const silinen =meyveler.shift();
console.log(silinen);

// dizinin siralamasini ters cevirir.
meyveler.reverse()


meyveler.push("kavun");

// alfabetik siralar
meyveler.sort();

// istedigin yere silerek veya silmeden ekleme
meyveler.splice(1,0,"erik")

meyveler.splice(4,1,"mango")


h1.innerHTML = meyveler;

console.log(meyveler);


/*===================Dizi Erisim Metotlari ==========*/

const sayilar =[3,5,2,"2","uc",2,"bes",5];

console.log(sayilar.includes("5")); // false
console.log(sayilar.includes(5)); //true

// ilk indeksi dondur.
const ikiIndeks = sayilar.indexOf(2);
console.log(ikiIndeks);
//2 nin 3 ten sonraki indeksi
console.log(sayilar.indexOf(2,3));

console.log(sayilar.lastIndexOf(2));

//const ucIndeks = sayilar.indexOf("uc");
//ucIndeks< 0 
// ? alert ("aranilan nesne bulunamadi")
// : alert ("aranilan nesnenin indeksi:" + ucIndeks);

//dizinin elemanlarini birlestirip string hale cevirir.
const sayilar1 = sayilar.join(" ");
console.log(sayilar1);

// to stringde araya bosluk vb konamaz.
const sayilar2 = sayilar.toString();
console.log(sayilar2);

h1.innerHTML = sayilar1;

const arabalar = ["bmw","mercedes","audi","ferrari","anadol"];
//2.index dahil kesip yeni liste yapar
const arabalar1 = arabalar.slice(2);
arabalar1.push("Fiat");
console.log(arabalar1);

//baslama dahil . bitis haric 
const arabalar2 = arabalar.slice(1,2);
console.log(arabalar2);

/*==============Concat=============*/

const yazilar  = ["a","b","ad","soyad","yas"];
const rakamlar =[3,5,1,4,7];
const birlesik = yazilar.concat(rakamlar, true, true, false);

console.log(birlesik);
console.log(typeof birlesik[11]);
h1.innerHTML=birlesik;





