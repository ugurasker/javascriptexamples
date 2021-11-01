const maaslar = [4000, 5000, 3500, 4200, 2850,5000,7500];

const liste = document.createElement("ul");
liste.className= "liste";
document.querySelector(".liste-div").appendChild(liste);

const listeyeEkle = function (satir) { 
    
const li = document.createElement("li");
li.appendChild(document.createTextNode(satir));
liste.appendChild(li);
}

const diziyiListeyeEkle = function () {
    for (let i in maaslar) {
        listeyeEkle(maaslar[i]);
    }
}

const guncelle = function (dizi) {
    const aciklama = document.querySelector(".aciklama");
     const yeniMaaslar= dizi.join(" ");
     aciklama.innerHTML=`Maaslar: ${yeniMaaslar} <br>
     Toplam Maas: ${dizi.reduce((x,y) => x + y)}`
  }
  

diziyiListeyeEkle();
guncelle(maaslar);

document.querySelector(".ekle").onclick = function () {
    
    let satir = document.querySelector(".input-liste");
      if (! satir.value) {
          alert("lutfen veri girin");
      } else {
    maaslar.push(Number(satir.value));
    listeyeEkle(satir.value);
    satir.value = "";
    guncelle(maaslar);
      }
 };

 document.querySelector(".sil").onclick = function () {
    if (maaslar.length == 0) {
        alert("silecek oge kalmadi");
    } else {
    maaslar.pop();
    const liste = document.querySelector(".liste");
    liste.removeChild(liste.lastElementChild); 
    guncelle(maaslar);
    }
    
}

document.querySelector(".ara").onclick = function () {
    const satir = document.querySelector(".input-liste");
    if (!satir.value) {
      alert("Aranacak maaş limiti giriniz.");
    } else {
      const flitreli = maaslar.filter((m) => m <= satir.value);
      if (flitreli.length == 0) {
        alert("Aradaginiz kriterlerde maas bulunamadi.");
      } else {
        guncelle(flitreli);
      }
    }
    satir.value = "";
  };

  document.querySelector(".input-liste").onkeydown = 
  function (e) {
    console.log(e);
    if (e.keyCode === 13) {
      // Enter tusuna basildi ise
      document.querySelector(".ekle").onclick();
    }
    if (e.keyCode === 46) {
      document.querySelector(".sil").onclick();
    }
  };
  