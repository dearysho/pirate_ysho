// 寶物造型頁籤
function jsTabs(evt, tabId) {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-panel");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabs-menu");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tabs-menu-active", "");
    }
    var tab = document.getElementById(tabId);
    tab.style.display = "block";
    evt.currentTarget.className += " tabs-menu-active";
    return false;
}

//交易發文頁籤
function jsTabs1(evt, tabId) {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-panel1");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabs-menu1");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tabs-menu-active1", "");
    }
    var tab = document.getElementById(tabId);
    tab.style.display = "block";
    evt.currentTarget.className += " tabs-menu-active1";
    return false;
}




function standUp(){
console.log("點殺小1");
var boxUP = document.getElementById('boxNews');
boxUP.setAttribute("class", "boxUP");


}


function standUPleft(){
    console.log("點殺小2");
}

function init(){
    var boxNews = document.getElementById("boxNews");
    var tabUp = document.getElementById("js-tabs1");

    boxNews.addEventListener('click',standUp);
    tabUp.addEventListener('click',standUPleft);

}
window.addEventListener('load', init);









// function init() {
//         document.getElementsByClassName('boxNews').onclick = standUp;
//         document.getElementById('js-tabs1').onclick = standUPleft;
    
// }
// window.onload = init;

