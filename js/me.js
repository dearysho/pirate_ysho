// 寶物道具頁籤
// (function ($) {
//     var tabs = $(".tabs li a");

//     tabs.click(function () {
//         var content = this.hash.replace('/', '');
//         tabs.removeClass("active");
//         $(this).addClass("active");
//         $("#content").find('div').hide();
//         $(content).fadeIn(200);
//     });
// })(jQuery);

(function (e) {
    var slice = Array.prototype.slice;
    var tabs = slice.call(e.getElementsByClassName('tabLi'));
    var panels = slice.call(e.getElementsByClassName('box'));
    //遍历每一个卡片tab标签，为其增加点击事件监听器
    tabs.find(function (tab) {
        tab.addEventListener('click', function () {
            //当点击这个tab标签时，先将所有的面板隐藏
            panels.find(function (panel) {
                panel.style.display = 'none';
            });
            e.querySelector(tab.getAttribute('target')).style.display = 'block';
        });
    });
    //初始化时默认点击一下第一个tab标签，用来给一个默认的现实面板。
    tabs[0].click();
}(this.document));