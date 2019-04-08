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

        BoardMove[0].style.top = "22vw";
        BoardMove[0].style.left = "7%";
        BoardMove[0].style.transform = "perspective(1000px) rotateY(42deg) skewY(-12deg)";

        BoardMove[1].style.top = "13vw";
        BoardMove[1].style.left = "30%";
        BoardMove[1].style.transform = "perspective(1000px) rotateY(42deg) skewY(-12deg) scale(.5)";

        BoardMove[2].style.top = "7.9vw";
        BoardMove[2].style.left = "50%";
        BoardMove[2].style.opacity = "0";
        BoardMove[2].style.transform = "perspective(1000px) rotateY(42deg) skewY(-12deg) scale(.3)";

        mbgiMove[0].style.transform = "translate(0px, 0px) scale(1) ";
    } else {
        frameMove[0].style.transform = "translateX(100px)";

        BoardMove[0].style.top = "30vw";
        BoardMove[0].style.left = "-14%";
        BoardMove[0].style.transform = "perspective(1000px) rotateY(42deg) skewY(-12deg)";

        BoardMove[1].style.top = "22vw";
        BoardMove[1].style.left = "7%";
        BoardMove[1].style.transform = "perspective(1000px) rotateY(42deg) skewY(-12deg)";

        BoardMove[2].style.top = "13vw";
        BoardMove[2].style.left = "30%";
        BoardMove[2].style.opacity = "1";
        BoardMove[2].style.transform = "perspective(1000px) rotateY(42deg) skewY(-12deg) scale(.5)";

        mbgiMove[0].style.transform = "translate(-13.137%, 5.25vw) scale(1.2) ";
    }
}


var switchType = 1;
showType(switchType);

function currentType(n) {
    showType(switchType = n);
}
function showType(n) {
    var j;
    var a = document.getElementsByClassName("sYProList");
    var b = document.getElementsByClassName("sPTTitle");
    if (n > a.length) { switchType = 1 }
    if (n < 1) { switchType = a.length }
    for (j = 0; j < a.length; j++) {
        a[j].style.display = "none";
    }
    for (j = 0; j < b.length; j++) {
        b[j].className = b[j].className.replace(" currentType", "");
    }

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (w > 1500) {
        a[switchType - 1].style.display = "block";
    }else{
        a[switchType - 1].style.display = "flex";
    }
    a[switchType - 1].style.animation = "fadeIn .6s";
    b[switchType - 1].className += " currentType";
}