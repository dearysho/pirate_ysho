
function jsTabs(evt, tabId) {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-panel");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].className = tabcontent[i].className.replace(" animated bounceIn", "");
    }
    tablinks = document.getElementsByClassName("tabs-menu");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tabs-menu-active", "");
    }
    var tab = document.getElementById(tabId);
    tab.className += " animated bounceIn";
    tab.style.display = "block";
    evt.currentTarget.className += " tabs-menu-active";
    return false;
}

