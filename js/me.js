

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