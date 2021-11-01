function hesapla(){
const r = document.getElementById("r").value;
const h = document.querySelector(".h").value; //.class adi ya da # id adi
const hacim =document.querySelector(".hacim");


    const sonuc = (Math.PI * r * r * h).toFixed(2);
    hacim.innerHTML = sonuc;
    
}



