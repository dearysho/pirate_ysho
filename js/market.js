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


function defaultPreview() {
    defaultHead = document.getElementsByClassName("previewHeadBox")[0].src;

    defaultBody = document.getElementsByClassName("previewBodyBox")[0].src;

    defaultSail = document.getElementsByClassName("previewSailBox")[0].src;

    defaultHeadPrev();
    defaultBodyPrev();
    defaultSailPrev();

    document.getElementById("sYHead").setAttribute("defaultId", defaultHeadId);
    document.getElementById("sYBody").setAttribute("defaultId", defaultBodyId);
    document.getElementById("sYSail").setAttribute("defaultId", defaultSailId);
    // console.log(defaultHeadId);
    // console.log(defaultBodyId);
    // console.log(defaultSailId);

    // alert(myCustoms[0]);
    // alert(myCustoms[1]);
    // alert(myCustoms[2]);

    var sYMerch = document.getElementsByClassName("sYMerch");
    for (var i = 0; i < myCustoms.length; i++) {
        for (var j = 0; j < sYMerch.length; j++) {
            if (sYMerch[j].getElementsByClassName("sYMerchImg")[0].getElementsByTagName("img")[0].getAttribute("merchid") == myCustoms[i]) {
                sYMerch[j].getElementsByClassName("sYMerchImg")[0].parentNode.classList.add("ownedMerch");
                sYMerch[j].getElementsByClassName("sYMerchImg")[0].parentNode.getElementsByClassName("btnpri")[0].getElementsByTagName("span")[0].innerHTML = "擁有造型";
                sYMerch[j].getElementsByClassName("sYMerchImg")[0].parentNode.getElementsByClassName("btnpri")[0].classList.remove("sYBuyBtn");
            }
        }
    }

}

function defaultHeadPrev() {
    document.getElementById("sYHead").src = defaultHead;
    document.getElementsByClassName("merchHead")[0].getElementsByClassName('SYremoveMerch')[0].parentNode.parentNode.getElementsByClassName("previewHeadBox")[0].src = defaultHead;

    for (var i = 0; i < document.getElementsByClassName("currentPreview").length; i++) {
        if (document.getElementsByClassName("currentPreview")[i].getElementsByClassName("sYMerchHeadImg")[0]) {
            document.getElementsByClassName("currentPreview")[i].getElementsByClassName("unvisibleBtn")[0].style.display = "none";
        }
    }

    if (document.getElementsByClassName("merchHead")[0].classList.contains("mydefaultHead")) {

    } else {
        document.getElementsByClassName("merchHead")[0].classList.add("mydefaultHead");
    }
    var currentPreviewList = document.getElementsByClassName("currentPreview");
    for (var i = 0; i < currentPreviewList.length; i++) {
        if (currentPreviewList[i].getElementsByClassName("sYMerchHeadImg")[0]) {
            currentPreviewList[i].classList.remove("currentPreview");
        }
    }
    document.getElementsByClassName("merchHead")[0].getElementsByClassName("SYPriceTag")[0].innerHTML = "狀態 :";
    document.getElementsByClassName("merchHead")[0].getElementsByClassName("merchPartPrice")[0].innerHTML = "裝備中";



}

function defaultBodyPrev() {
    document.getElementById("sYBody").src = defaultBody;
    document.getElementsByClassName("merchBody")[0].getElementsByClassName('SYremoveMerch')[0].parentNode.parentNode.getElementsByClassName("previewBodyBox")[0].src = defaultBody;

    for (var i = 0; i < document.getElementsByClassName("currentPreview").length; i++) {
        if (document.getElementsByClassName("currentPreview")[i].getElementsByClassName("sYMerchBodyImg")[0]) {
            document.getElementsByClassName("currentPreview")[i].getElementsByClassName("unvisibleBtn")[0].style.display = "none";
        }
    }

    if (document.getElementsByClassName("merchBody")[0].classList.contains("mydefaultBody")) {

    } else {
        document.getElementsByClassName("merchBody")[0].classList.add("mydefaultBody");
    }
    var currentPreviewList = document.getElementsByClassName("currentPreview");
    for (var i = 0; i < currentPreviewList.length; i++) {
        if (currentPreviewList[i].getElementsByClassName("sYMerchBodyImg")[0]) {
            currentPreviewList[i].classList.remove("currentPreview");
        }
    }
    document.getElementsByClassName("merchBody")[0].getElementsByClassName("SYPriceTag")[0].innerHTML = "狀態 :";
    document.getElementsByClassName("merchBody")[0].getElementsByClassName("merchPartPrice")[0].innerHTML = "裝備中";
}

function defaultSailPrev() {
    document.getElementById("sYSail").src = defaultSail;
    document.getElementsByClassName("merchSail")[0].getElementsByClassName('SYremoveMerch')[0].parentNode.parentNode.getElementsByClassName("previewSailBox")[0].src = defaultSail;

    for (var i = 0; i < document.getElementsByClassName("currentPreview").length; i++) {
        if (document.getElementsByClassName("currentPreview")[i].getElementsByClassName("sYMerchSailImg")[0]) {
            document.getElementsByClassName("currentPreview")[i].getElementsByClassName("unvisibleBtn")[0].style.display = "none";
        }
    }

    if (document.getElementsByClassName("merchSail")[0].classList.contains("mydefaultSail")) {

    } else {
        document.getElementsByClassName("merchSail")[0].classList.add("mydefaultSail");
    }
    var currentPreviewList = document.getElementsByClassName("currentPreview");
    for (var i = 0; i < currentPreviewList.length; i++) {
        if (currentPreviewList[i].getElementsByClassName("sYMerchSailImg")[0]) {
            currentPreviewList[i].classList.remove("currentPreview");
        }
    }
    document.getElementsByClassName("merchSail")[0].getElementsByClassName("SYPriceTag")[0].innerHTML = "狀態 :";
    document.getElementsByClassName("merchSail")[0].getElementsByClassName("merchPartPrice")[0].innerHTML = "裝備中";
}

var shelf = document.getElementsByClassName('sYMerchPreviewBox')[0];
var partsPreviewBtn = document.getElementsByClassName('sYPreviewBtn')[0];

partsPreviewBtn.onclick = function () {
    if (partsPreviewBtn.getElementsByTagName('span')[0].innerHTML == "查看目前選擇部位") {
        shelf.style.left = "0vw";
        partsPreviewBtn.getElementsByTagName('span')[0].innerHTML = "回到預覽";
    } else {
        shelf.style.left = "100vw";
        partsPreviewBtn.getElementsByTagName('span')[0].innerHTML = "查看目前選擇部位";
    }

};
document.getElementsByClassName('sYClosePreviewBtn')[0].onclick = function () {
    shelf.style.left = "100vw";
    partsPreviewBtn.getElementsByTagName('span')[0].innerHTML = "查看目前選擇部位";
};

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);



$(document).on('ready', function () {
    document.getElementsByClassName('marTypeTit titleSec')[1].onclick = function () {

        if (w < 1024) {

            $(".typeHot").slick({
                arrows: false,
                dots: false,
                infinite: true,
                slidesToShow: 2.5,
                slidesToScroll: 2
            });
        }
    };
    document.getElementsByClassName('merchTypHead')[0].onclick = function () {
        if (w < 1024) {


            $(".typeHead").slick({
                arrows: false,
                dots: false,
                infinite: true,
                slidesToShow: 2.5,
                slidesToScroll: 2
            });
        }
    };
    document.getElementsByClassName('merchTypeBody')[0].onclick = function () {
        if (w < 1024) {
            $(".typeBody").slick({
                arrows: false,
                dots: false,
                infinite: true,
                slidesToShow: 2.5,
                slidesToScroll: 2
            });
        }

    };
    document.getElementsByClassName('merchTypSail')[0].onclick = function () {
        if (w < 1024) {
            $(".typeSail").slick({
                arrows: false,
                dots: false,
                infinite: true,
                slidesToShow: 2.5,
                slidesToScroll: 2
            });
        }

    };
});


var switchType = 1;
showType(switchType);

function currentType(n) {
    showType(switchType = n);
}
function showType(n) {
    var i;
    var switchContent = document.getElementsByClassName("regular");
    var page = document.getElementsByClassName("merchType");
    if (n > switchContent.length) { switchType = 1 }
    if (n < 1) { switchType = switchContent.length }
    for (i = 0; i < switchContent.length; i++) {
        switchContent[i].style.display = "none";
    }
    for (i = 0; i < page.length; i++) {
        page[i].className = page[i].className.replace(" current_type", "");
    }
    switchContent[switchType - 1].style.display = "flex";
    switchContent[switchType - 1].style.animation = "fadeIn .6s";
    page[switchType - 1].className += " current_type";
}


//預覽按鈕
var merchItem = document.getElementsByClassName('sYMerch');
var merchImg = document.getElementsByClassName('sYMerchImg');
for (var i = 0; i < merchImg.length; i++) {
    merchImg[i].onmouseover = function () {
        //把預覽圖換成hover的


        //hover結束還要換回來
    };
    merchItem[i].onmouseenter = function () {

        if (this.classList.contains("currentPreview")) {
            this.getElementsByClassName('visibleBtn')[0].style.display = "none";
        } else {
            this.getElementsByClassName('visibleBtn')[0].style.display = "block";
        }
    };
    merchItem[i].onmouseleave = function () {
        this.getElementsByClassName('visibleBtn')[0].style.display = "none";
    };

    merchImg[i].onclick = function () {
        if (this.parentNode.classList.contains("currentPreview")) {
            this.getElementsByClassName('visibleBtn')[0].style.display = "block";
            this.getElementsByClassName('unvisibleBtn')[0].style.display = "none";
            this.parentNode.classList.remove("currentPreview");
            if (this.getElementsByClassName("sYMerchHeadImg")[0]) {
                defaultHeadPrev();
            } else if (this.getElementsByClassName("sYMerchBodyImg")[0]) {
                defaultBodyPrev();
            } else if (this.getElementsByClassName("sYMerchSailImg")[0]) {
                defaultSailPrev();
            }

            //把預覽圖換回來



        } else {
            var thisType = this.getElementsByTagName('img')[0].className;
            var sameType = document.getElementsByClassName(thisType);


            for (var i = 0; i < sameType.length; i++) {
                sameType[i].parentNode.getElementsByClassName('unvisibleBtn')[0].style.display = "none";
                sameType[i].parentNode.parentNode.classList.remove("currentPreview");
            }

            this.getElementsByClassName('visibleBtn')[0].style.display = "none";
            this.getElementsByClassName('unvisibleBtn')[0].style.display = "block";
            this.parentNode.classList.add("currentPreview");

            //把預覽圖換成click的
            var selectedImg = this.getElementsByTagName('img')[0].src;
            if (this.getElementsByClassName('sYMerchHeadImg')[0]) {
                // document.getElementById('sYHead').classList.remove("previewAnimation");
                // document.getElementById('sYHead').classList.add("previewAnimation");

                document.getElementsByClassName("merchHead")[0].classList.remove("mydefaultHead");
                document.getElementById('sYHead').src = selectedImg;
                document.getElementsByClassName('previewHeadBox')[0].src = selectedImg;
                document.getElementsByClassName('merchHead')[0].getElementsByTagName('h3')[0].innerHTML = this.parentNode.getElementsByTagName('h3')[0].innerHTML;
                document.getElementsByClassName('merchHead')[0].getElementsByClassName('merchPartPrice')[0].innerHTML = this.parentNode.getElementsByClassName('sYIntroPrice')[0].innerHTML;
                document.getElementsByClassName("merchHead")[0].getElementsByClassName("SYPriceTag")[0].innerHTML = "價格 :";
            } else if (this.getElementsByClassName('sYMerchBodyImg')[0]) {
                // document.getElementById('sYBody').classList.add("previewAnimation");

                document.getElementsByClassName("merchBody")[0].classList.remove("mydefaultBody");
                document.getElementById('sYBody').src = selectedImg;
                document.getElementsByClassName('previewBodyBox')[0].src = selectedImg;
                document.getElementsByClassName('merchBody')[0].getElementsByTagName('h3')[0].innerHTML = this.parentNode.getElementsByTagName('h3')[0].innerHTML;
                document.getElementsByClassName('merchBody')[0].getElementsByClassName('merchPartPrice')[0].innerHTML = this.parentNode.getElementsByClassName('sYIntroPrice')[0].innerHTML;
                document.getElementsByClassName("merchBody")[0].getElementsByClassName("SYPriceTag")[0].innerHTML = "價格 :";
            } else if (this.getElementsByClassName('sYMerchSailImg')[0]) {
                // document.getElementById('sYSail').classList.add("previewAnimation");

                document.getElementsByClassName("merchSail")[0].classList.remove("mydefaultSail");
                document.getElementById('sYSail').src = selectedImg;
                document.getElementsByClassName('previewSailBox')[0].src = selectedImg;
                document.getElementsByClassName('merchSail')[0].getElementsByTagName('h3')[0].innerHTML = this.parentNode.getElementsByTagName('h3')[0].innerHTML;
                document.getElementsByClassName('merchSail')[0].getElementsByClassName('merchPartPrice')[0].innerHTML = this.parentNode.getElementsByClassName('sYIntroPrice')[0].innerHTML;
                document.getElementsByClassName("merchSail")[0].getElementsByClassName("SYPriceTag")[0].innerHTML = "價格 :";
            }

        }
    };

};

$(document).on('ready', function () {
    document.getElementsByClassName("merchHead")[0].getElementsByClassName('SYremoveMerch')[0].onclick = function () {
        defaultHeadPrev();
    };
    document.getElementsByClassName("merchBody")[0].getElementsByClassName('SYremoveMerch')[0].onclick = function () {
        defaultBodyPrev();
    };
    document.getElementsByClassName("merchSail")[0].getElementsByClassName('SYremoveMerch')[0].onclick = function () {
        defaultSailPrev();
    };
});

document.getElementsByClassName("sYReverseBtn")[0].onclick = function () {
    defaultHeadPrev();
    defaultBodyPrev();
    defaultSailPrev();
};

$(document).on('ready', defaultPreview());

// canvas drawline 4 merchCircle

function drawLine() {
    var canvas = document.getElementById('drawLineCanvas');
    var context = canvas.getContext('2d');

    context.strokeStyle = "#635950";

    context.lineWidth = 4;
    context.lineCap = "round";

    context.moveTo(170, 107);
    context.lineTo(450, 107);
    context.lineTo(590, 134);
    context.stroke();

    context.moveTo(170, 241);
    context.lineTo(400, 241);
    context.lineTo(480, 180);
    context.stroke();

    context.moveTo(170, 376);
    context.lineTo(380, 376);
    context.lineTo(430, 320);
    context.stroke();

}
window.addEventListener('load', drawLine);
var buyMerch = document.getElementsByClassName("sYBuyBtn");

for (var i = 0; i < buyMerch.length; i++) {
    buyMerch[i].onclick = function () {

        var ModelId = this.parentNode.parentNode.parentNode.getElementsByClassName("sYMerchImg")[0].getElementsByTagName("img")[0].getAttribute("merchId");
        var wearing = 1;
        var tradeTime;
        tradeTime = new Date();
        tradeTime = tradeTime.getFullYear() + '-' +
            ('00' + (tradeTime.getMonth() + 1)).slice(-2) + '-' +
            ('00' + tradeTime.getDate()).slice(-2) + ' ' +
            ('00' + tradeTime.getHours()).slice(-2) + ':' +
            ('00' + tradeTime.getMinutes()).slice(-2) + ':' +
            ('00' + tradeTime.getSeconds()).slice(-2);
        var tradePrice = parseInt(this.parentNode.parentNode.getElementsByClassName("sYIntroPrice")[0].innerHTML);
        var wearHead = document.getElementById("sYHead").getAttribute("defaultId");
        var wearBody = document.getElementById("sYBody").getAttribute("defaultId");
        var wearSail = document.getElementById("sYSail").getAttribute("defaultId");

        var buyPart = this.parentNode.parentNode.parentNode.getElementsByClassName("sYMerchImg")[0].getElementsByTagName("img")[0];
        if (buyPart.className == 'sYMerchHeadImg') {
            wearHead = buyPart.getAttribute("merchId");
        } else if (buyPart.className == 'sYMerchBodyImg') {
            wearBody = buyPart.getAttribute("merchId");
        } else if (buyPart.className == 'sYMerchSailImg') {
            wearSail = buyPart.getAttribute("merchId");
        }
        // console.log(wearHead);
        // console.log(wearBody);
        // console.log(wearSail);
        // console.log(memId);
        // console.log(ModelId);
        // console.log(tradeTime);
        // console.log(wearing);
        // console.log(tradePrice);
        var buyCount = 0;

        var myMoney;

        $.ajax({
            url: 'marketphp/getMoney.php',
            data: {
                memId: memId,
            },
            type: 'GET',
            success: function(data){
                myMoney = data;
            },
            complete:function(){

                if (tradePrice < myMoney) {
                    $.ajax({
                        url: 'marketphp/buyMerch.php',
                        data: {
                            buyCount: buyCount,
                            memId: memId,
                            ModelId: ModelId,
                            tradeTime: tradeTime,
                            tradePrice: tradePrice,
                            wearing: wearing,
                            wearHead: wearHead,
                            wearBody: wearBody,
                            wearSail: wearSail,
                        },
                        type: 'GET',
                        success: function () {
                            alert('購買完成');
                        },
                        error: function (e) {
                            alert('出錯囉???');
                        }
                    });
        
                    defaultPreview();
                } else {
                    alert("拿錢來臭乞?丐!!");
                }

            }
        });


    }
}

document.getElementsByClassName("sYbuymerchesBtn")[0].onmouseover = function () {
    var selectCount = document.getElementsByClassName("currentPreview").length;
    for (var i = 0; i < selectCount; i++) {
        if (document.getElementsByClassName("currentPreview")[i].classList.contains("ownedMerch")) {
            selectCount--;
        }
    }
    document.getElementsByClassName("buyAllinfo")[0].innerHTML = `目前選擇 ${selectCount} 件商品`;
}

document.getElementsByClassName("sYbuymerchesBtn")[0].onmouseout = function () {
    document.getElementsByClassName("buyAllinfo")[0].innerHTML = `#購買預覽中造型`;
}


document.getElementsByClassName("sYbuymerchesBtn")[0].onclick = function () {

    var buyCount = document.getElementsByClassName("currentPreview").length;
    for (var i = 0; i < buyCount; i++) {
        if (document.getElementsByClassName("currentPreview")[i].classList.contains("ownedMerch")) {
            buyCount--;
        }
    }


    if (buyCount.length == 0) {
        alert("您尚未選擇商品!!!");
        //沒有選擇商品就一鍵購買

    } else {

        var ModelIdFirst = 0;
        var tradePriceFirst = 0;
        var ModelIdSec = 0;
        var tradePriceSec = 0;
        var ModelIdThird = 0;
        var tradePriceThird = 0;

        for (var i = 0; i < document.getElementsByClassName("currentPreview").length; i++) {
            if (document.getElementsByClassName("currentPreview")[i].getElementsByClassName("sYMerchHeadImg")[0]) {
                if (document.getElementsByClassName("currentPreview")[i].classList.contains("ownedMerch")) {
                } else {
                    var ModelIdFirst = document.getElementsByClassName("currentPreview")[i].getElementsByClassName("sYMerchHeadImg")[0].getAttribute("merchid");
                    var tradePriceFirst = parseInt(document.getElementsByClassName("currentPreview")[i].getElementsByClassName("sYIntroPrice")[0].innerHTML);
                }
            } else if (document.getElementsByClassName("currentPreview")[i].getElementsByClassName("sYMerchBodyImg")[0]) {
                if (document.getElementsByClassName("currentPreview")[i].classList.contains("ownedMerch")) {
                } else {
                    var ModelIdSec = document.getElementsByClassName("currentPreview")[i].getElementsByClassName("sYMerchBodyImg")[0].getAttribute("merchid");
                    var tradePriceSec = parseInt(document.getElementsByClassName("currentPreview")[i].getElementsByClassName("sYIntroPrice")[0].innerHTML);
                }

            } else if (document.getElementsByClassName("currentPreview")[i].getElementsByClassName("sYMerchSailImg")[0]) {
                if (document.getElementsByClassName("currentPreview")[i].classList.contains("ownedMerch")) {
                } else {
                    var ModelIdThird = document.getElementsByClassName("currentPreview")[i].getElementsByClassName("sYMerchSailImg")[0].getAttribute("merchid");
                    var tradePriceThird = parseInt(document.getElementsByClassName("currentPreview")[i].getElementsByClassName("sYIntroPrice")[0].innerHTML);
                }
            }
        }

        var tradeTime;
        tradeTime = new Date();
        tradeTime = tradeTime.getFullYear() + '-' +
            ('00' + (tradeTime.getMonth() + 1)).slice(-2) + '-' +
            ('00' + tradeTime.getDate()).slice(-2) + ' ' +
            ('00' + tradeTime.getHours()).slice(-2) + ':' +
            ('00' + tradeTime.getMinutes()).slice(-2) + ':' +
            ('00' + tradeTime.getSeconds()).slice(-2);

        var wearing = "1";

        if (ModelIdFirst == 0) {
            var wearHead = document.getElementById("sYHead").getAttribute("defaultId");
        } else {
            var wearHead = ModelIdFirst;
        }

        if (ModelIdSec == 0) {
            var wearBody = document.getElementById("sYBody").getAttribute("defaultId");
        } else {
            var wearBody = ModelIdSec;
        }

        if (ModelIdThird == 0) {
            var wearSail = document.getElementById("sYSail").getAttribute("defaultId");
        } else {
            var wearSail = ModelIdThird;
        }

        console.log(
            buyCount,
            memId,
            ModelIdFirst,
            tradePriceFirst,
            ModelIdSec,
            tradePriceSec,
            ModelIdThird,
            tradePriceThird,

            tradeTime,
            wearing,
            wearHead,
            wearBody,
            wearSail,
        );

        var myMoney;

        $.ajax({
            url: 'marketphp/getMoney.php',
            data: {
                memId: memId,
            },
            type: 'GET',
            success: function(data){
                myMoney = data;
            },
            complete:function(){

                if ((tradePriceFirst+tradePriceSec+tradePriceThird) < myMoney) {
                    $.ajax({
                        url: 'marketphp/buyMerch.php',
                        data: {
                            buyCount: buyCount,
                            memId: memId,
                            ModelIdFirst: ModelIdFirst,
                            tradePriceFirst: tradePriceFirst,
                            ModelIdSec: ModelIdSec,
                            tradePriceSec: tradePriceSec,
                            ModelIdThird: ModelIdThird,
                            tradePriceThird: tradePriceThird,
        
                            tradeTime: tradeTime,
                            wearing: wearing,
                            wearHead: wearHead,
                            wearBody: wearBody,
                            wearSail: wearSail,
                        },
                        type: 'GET',
                        success: function () {
                            alert('購買完成');
                        },
                        error: function (e) {
                            alert('出錯囉???');
                        }
                    });
                } else {
                    alert("沒錢還想白吃白喝R???");
                }

            },
        });

        


        
    }
}

//買東西囉
