// getelementbyid() 
const paragraf = document.getElementById("par");
paragraf.style.backgroundColor = " black ";
paragraf.style.color = "white";
paragraf.style.fontSize = "40px";

const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.height = "30px";
buton.style.backgroundColor = "black";
buton.style.color = "yellow";
buton.style.fontSize ="18px";
buton.innerHTML = "ARA";

// gelElementsByTagName()

const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[0].style.height = "300px";

//getElementBtClassName()

const h1 = document.getElementsByClassName("h1");
h1[0].style.color = "red";
h1[0].style.textAlign = "center";

//querySelector()

const baslik = document.querySelector(".title");
baslik.innerHTML = "DOM Selector";

const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(green,blue)";


// eventler 
const header = document.querySelector(".h1"); // h1 in rengini alip saklama
const h1Renk = header.style.color;
  
document.querySelector(".h1").onmouseover = function (){
    const h1 = document.querySelector(".h1");
    h1.style.color = "white";
    h1.style.backgroundColor ="black";
};
document.querySelector(".h1").onmouseout = function(){
    const h1 = document.querySelector(".h1");
    h1.style.color = h1Renk;    // h1 in sakladigimiz rengini geri yukleme
    h1.style.backgroundColor ="transparent";
};

// addEventListener ()
// mouseover , fucntion () {} da yazabiliriz
document.querySelector("#btn").addEventListener("mouseover",function () {
document.querySelector("#btn").style.width = "150px";
}) ;

document.querySelector("#btn").addEventListener("mouseout",()=>{ 
    document.querySelector("#btn").style.width = "100px";
    }) ;
