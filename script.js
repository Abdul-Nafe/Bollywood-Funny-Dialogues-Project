function makeSounds(number){
    switch (number) {
        case 1:
             var sound1 = new Audio("s1.mp3");
        sound1.play();
        break;
        case 2: 
        var sound2 = new Audio("s2.mp3");
        sound2.play();
        break;
        case 3:
             var sound3 = new Audio("s3.mp3");
        sound3.play();
        break;
        case 4:
             var sound4 = new Audio("s4.mp3");
        sound4.play();
        break;
        case 5:
             var sound5 = new Audio("s5.mp3");
        sound5.play();
        break;
        case 6:
             var sound6 = new Audio("s6.mp3");
        sound6.play();
        break;
        case 7: 
        var sound7 = new Audio("s7.mp3");
        sound7.play();
        break;
        case 8:
             var sound8 = new Audio("s8.mp3");
        sound8.play();
        break;
        case 9: 
        var sound9 = new Audio("s9.mp3");
        sound9.play();
        break;
        case 10:
             var sound10 = new Audio("s10.mp3");
        sound10.play();
        break;
        case 11:
             var sound11 = new Audio("s11.mp3");
        sound11.play();
        break;
        case 12:
             var sound12 = new Audio("s12.mp3");
        sound12.play();
        break;
        case 13: 
        var sound13 = new Audio("s13.mp3");
        sound13.play();
        break;
        case 14:
             var sound14 = new Audio("s14.mp3");
        sound14.play();
        break;
        case 15:
             var sound15 = new Audio("s15.mp3");
        sound15.play();
        break;
        case 16:
             var sound16 = new Audio("s16.mp3");
        sound16.play();
        break;

    }
}
document.querySelectorAll(".click")[0].addEventListener('click',function(){
    var number = Math.floor(Math.random() * 16) + 1;
    makeSounds(number);

});
