var switchRank = 1;
showRank(switchRank);

function currentRank(n) {
    showRank(switchRank = n);
    repositionFrame(n);
}
function showRank(n) {
    var i;
    var changeRank = document.getElementsByClassName("sRDisplay");
    var trigger = document.getElementsByClassName("sRTTitle");
    if (n > changeRank.length) { switchRank = 1 }
    if (n < 1) { switchRank = changeRank.length }
    for (i = 0; i < changeRank.length; i++) {
        changeRank[i].style.display = "none";
    }
    for (i = 0; i < trigger.length; i++) {
        trigger[i].className = trigger[i].className.replace(" currentRank", "");
    }
    changeRank[switchRank - 1].style.display = "flex";
    changeRank[switchRank - 1].style.animation = "fadeIn .6s";
    trigger[switchRank - 1].className += " currentRank";
}

function repositionFrame(n) {
    var frameMove = document.getElementsByClassName("titFrame");

    if (n == 1) {
        frameMove[0].style.transform = "translateX(0px)";
    } else {
        frameMove[0].style.transform = "translateX(100px)";
    }
}