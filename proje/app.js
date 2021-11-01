let highscore=0;
 

let sayi = Math.ceil(Math.random()*20);
let score = 10;


const display= function (message) {
    document.querySelector(".message").textContent=message;
};

document.querySelector(".kontrol").onclick = function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
    display("Sayi girmediniz ,1ile 20 arasinda bir sayi giriniz")
    }
    else if (guess>20) {
    display("Girdiginiz sayi 1 ile 20 arasinda olmalidir")
    }
    else if (guess != sayi) {
     score=score-1;
        if (score>0) {
        display(guess>sayi ? "Azalt" : "Arttir");
        document.querySelector(".score").textContent=`Puan:${score}`;
        } else {
            display("oyunu Kaybettiniz");
         document.querySelector("score").textContent= 0;
        }


    }
    else if (guess == sayi) {
    display("Tebrikler, dogru tahmin")
    document.querySelector(".result").textContent = sayi;
    
    document.querySelector("body").style.backgroundColor="green";
            if (score>highscore) {
                highscore=score;
                document.querySelector(".highscore").textContent=
                `En Yuksek Skor: ${highscore}`;
            }

    }
     
};
document.querySelector(".tekrar").onclick= function (){
    score= 10;
    sayi = Math.ceil(Math.random()*20);
    display("Tahmine Baslaniyor");
    document.querySelector(".score").textContent=s`Puan:${score}`;
    document.querySelector(".result").textContent= "?";
    document.querySelector(".guess").value="";
    document.querySelector("body").style.backgroundColor = "#2d3436";
    

}