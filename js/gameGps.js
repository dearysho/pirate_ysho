// onload 
// 用Ajax檢查SESSION是否有登入資訊
// 有的話將過往定位


// 已經登入情況
// 使用Ajax 回server端取得上次遊玩時間
	//若時間<1hr則將寶箱之經緯度存放到頁面上
    //若時間>1hr則使用Ajax 回server端,將位置及寶箱之經緯度與當下時間()存放到頁面上
//抓
//設定地理位置
function getLocaFirst(){
	navigator.geolocation.getCurrentPosition(gpsSuccCallback,gpsErrorCallback,{
		//隨時更新位置
		enableHighAccuracy: true,
		timeout: 60000,
		maximumAge: 60000,
	});
}
function gpsSuccCallback(e){
	//取得位置
	var lati = e.coords.latitude;
	var longi = e.coords.longitude;
	var accuracy = e.coords.accuracy;

	// if(accuracy>5000){
	// 	document.getElementById('position').innerHTML=`超過偵測範圍`;
	// }else{
	// 	// document.getElementById('position').innerHTML='緯度: '+lati+'<br>經度: '+longi+'<br>準確度: '+accuracy;
	// 	document.getElementById('position').innerHTML=`緯度: ${lati}<br>經度: ${longi}<br>準確度: ${accuracy}`;
	// }

    //設定地圖資訊
	var area = document.getElementById("gameGps");
	var playerPosition = new google.maps.LatLng(lati,longi);
	var options = {
		zoom : 15,
		center : playerPosition,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};
	//地圖
	var gameGps = new google.maps.Map(area,options);
	var marker = new google.maps.Marker({
		position: playerPosition,
		map: gameGps,
		icon: './image/ship/pokemon.gif',
		title: '航行者!'
	});
}
function gpsErrorCallback(e){
	document.getElementById('position').innerHTML=`錯誤碼: ${e.code}<br>錯誤訊息: ${e.message}`;
	//顯示需開啟GPS功能
}
//產生地圖
//loading google map
 window.addEventListener('load',getLocaFirst);