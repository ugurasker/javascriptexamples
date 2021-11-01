const yorumlar = [
    {
      id: 1,
      ad: "Ayşe yılmaz",
      meslek: "Developer",
      yorum: "Uygulamayı çok beğendim...",
      resim:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
    {
      id: 2,
      ad: "İsmail Can",
      meslek: "Tester",
      yorum: "Uygulama çok zor.",
      resim:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
      id: 3,
      ad: "Canan Can",
      meslek: "Grafiker",
      yorum: "Tebrikler çok başarılı",
      resim:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    },
    {
      id: 4,
      ad: "Melis Gel",
      meslek: "Stajer",
      yorum: "Geliştirilmesi gerekiyor.",
      resim:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    },
  ];

  //bilgilere eriselim.
  const resim = document.querySelector("#kisi-resim");
  const yazar = document.querySelector("#yazar");
  const aciklama = document.querySelector("#aciklama");
  const meslek = document.querySelector("#meslek");

  //butonlara eriselim.
  const ileriBtn=document.querySelector(".ileri-btn");
  const geriBtn=document.querySelector(".geri-btn");
  const rasgeleBtn=document.querySelector(".rasgele-btn");


  const kisi =yorumlar[0];
  resim.src= kisi.resim;
  yazar.textContent=kisi.ad;
  meslek.textContent=kisi.meslek;
  aciklama.textContent=kisi.yorum;

  let index=0;

  const kisiyiGoster = function (index) {
    const kisi =yorumlar[index];
    resim.src= kisi.resim;
    yazar.textContent=kisi.ad;
    meslek.textContent=kisi.meslek;
    aciklama.textContent=kisi.yorum;
  };

  kisiyiGoster(index);

  ileriBtn.onclick = function () {

      if (index<yorumlar.length-1) {
    index++;
    }
     else {
         index =0;
    }
     kisiyiGoster(index);
};

geriBtn.onclick = function () {

    if (index==0) {
  index=yorumlar.length-1;
  }
   else {
       index--;
  }
   kisiyiGoster(index);
};

rasgeleBtn.onclick = function () {
    index =Math.floor(Math.random()*yorumlar.length);
    kisiyiGoster(index);
};