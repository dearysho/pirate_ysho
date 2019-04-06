var switchMarket = 1;
showMarket(switchMarket);

function currentMarket(n) {
    showMarket(switchMarket = n);
    repositionFrame(n);
}
function showMarket(n) {
    var i;
    var changeMar = document.getElementsByClassName("marMain");
    var trigger = document.getElementsByClassName("marTitInBox");
    if (n > changeMar.length) { switchMarket = 1 }
    if (n < 1) { switchMarket = changeMar.length }
    for (i = 0; i < changeMar.length; i++) {
        changeMar[i].style.display = "none";
    }
    for (i = 0; i < trigger.length; i++) {
        trigger[i].className = trigger[i].className.replace(" currentMar", "");
    }
    changeMar[switchMarket - 1].style.display = "block";
    changeMar[switchMarket - 1].style.animation = "fadeIn .6s";
    trigger[switchMarket - 1].className += " currentMar";
}

function repositionFrame(n) {
    var frameMove = document.getElementsByClassName("titFrame");
    var BoardMove = document.getElementsByClassName("marBoard");
    var mbgiMove = document.getElementsByClassName("mlsl");
    

    if (n == 1) {
        frameMove[0].style.transform = "translateX(0px)";

        BoardMove[0].style.top = "420px";
        BoardMove[0].style.left = "7%";
        BoardMove[0].style.transform = "perspective(1000px) rotateY(42deg) skewY(-12deg)";

        BoardMove[1].style.top = "250px";
        BoardMove[1].style.left = "30%";
        BoardMove[1].style.transform = "perspective(1000px) rotateY(42deg) skewY(-12deg) scale(.5)";

        BoardMove[2].style.top = "150px";
        BoardMove[2].style.left = "50%";
        BoardMove[2].style.opacity = "0";
        BoardMove[2].style.transform = "perspective(1000px) rotateY(42deg) skewY(-12deg) scale(.3)";

        // left: 30%;
        // top: 250px;
        // transform: perspective(1000px) rotateY(42deg) skewY(-12deg) scale(.5);

        mbgiMove[0].style.transform = "translate(0px, 0px) scale(1) ";
    } else {
        frameMove[0].style.transform = "translateX(88px)";

        BoardMove[0].style.top = "580px";
        BoardMove[0].style.left = "-14%";
        BoardMove[0].style.transform = "perspective(1000px) rotateY(42deg) skewY(-12deg)";
        
        BoardMove[1].style.top = "420px";
        BoardMove[1].style.left = "7%";
        BoardMove[1].style.transform = "perspective(1000px) rotateY(42deg) skewY(-12deg)";

        BoardMove[2].style.top = "250px";
        BoardMove[2].style.left = "30%";
        BoardMove[2].style.opacity = "1";
        BoardMove[2].style.transform = "perspective(1000px) rotateY(42deg) skewY(-12deg) scale(.5)";

        mbgiMove[0].style.transform = "translate(-250px, 100px) scale(1.2) ";
    }
}



// var switchCusType = 1;
// showCusType(switchCusType);

// function currentCusType(n) {
//     showCusType(switchCusType = n);

// }
// function showCusType(n) {
//     var i;
//     var changeMar = document.getElementsByClassName("marMain");
//     var trigger = document.getElementsByClassName("sPTTitle");
//     if (n > changeMar.length) { switchCusType = 1 }
//     if (n < 1) { switchCusType = changeMar.length }
//     for (i = 0; i < changeMar.length; i++) {
//         changeMar[i].style.display = "none";
//     }
//     for (i = 0; i < trigger.length; i++) {
//         trigger[i].className = trigger[i].className.replace(" currentCusType", "");
//     }
//     changeCusType[switchCusType - 1].style.display = "block";
//     changeCusType[switchCusType - 1].style.animation = "fadeIn .6s";
//     trigger[switchCusType - 1].className += " currentCusType";
// }
