// 寶物道具頁籤
(function ($) {
    var tabs = $(".tabs li a");

    tabs.click(function () {
        var content = this.hash.replace('/', '');
        tabs.removeClass("active");
        $(this).addClass("active");
        $("#content").find('div').hide();
        $(content).fadeIn(200);
    });
})(jQuery);