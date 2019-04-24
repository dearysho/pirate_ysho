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




// function standUp() {
//     console.log("123");
//     $('.boxNews').toggleClass("bbb");
// }


// function filewrapBox() {
//     console.log("888");
//     $('.filewrap').toggleClass("vvv");
// }

// function init() {
//     var boxNews = document.getElementById("boxNews");
//     var qq = document.getElementById("qq");

//     boxNews.addEventListener('click', standUp);
//     qq.addEventListener('click', filewrapBox);
// }
// window.addEventListener('load', init);




 



