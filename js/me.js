
// (function (e) {
//     var slice = Array.prototype.slice;
//     var tabs = slice.call(e.getElementsByClassName('tabLi'));
//     var panels = slice.call(e.getElementsByClassName('box'));
//     tabs.find(function (tab) {
//         tab.addEventListener('click', function () {
//             //點擊這個tab時，先將其他tab隱藏
//             panels.find(function (panel) {
//                 panel.style.display = 'none';
//             });
//             e.querySelector(tab.getAttribute('target')).style.display = 'block';
//         });
//     });
//     //預設顯示第一個tab
//     tabs[0].click();
// }(this.document));

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

