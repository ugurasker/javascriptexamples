


document.querySelector(".btn").onclick = function () {
    
    const renkler=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    
    let sum="#";
    
  for (let i=0;i<6; i++) {
    let x = renkler[Math.floor(Math.random()*renkler.length)];
    x=x.toString();
    sum = sum.concat(x);
    
    
}

 document.querySelector("body").style.backgroundColor=sum; 
}