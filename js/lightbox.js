function show(){
    document.getElementsByClassName("lightbox")[i].style.display = 'block'; // i代入這個頁面的第幾個燈箱
}
function off(){
    document.getElementsByClassName("lightbox")[i].style.display = 'none';  // i代入這個頁面的第幾個燈箱
}
window.addEventListener('load',function(){
    document.getElementById("login").onclick=show;              // 填入觸發lightbox的DOM
    document.getElementsByClassName("leave")[i].onclick=off;    // i代入這個頁面的第幾個燈箱
    document.getElementsByClassName("popbg")[i].onclick=off;    // i代入這個頁面的第幾個燈箱
},false);

// 因為每個頁面燈箱數可能為多個,因此設定lightbox為class
// i代入這個頁面第幾個燈箱