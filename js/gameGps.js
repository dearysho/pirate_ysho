//google map api常態關閉 要測試時再跟我說 我再打開
//開始遊戲的時候觸發按鈕要做的事
//#gameGps::before left -200% 雲
//#gameGps::after right -200% 雲
//#gameGpsMap::after 遮罩
//執行函示gpsStart();


//======地圖============================
// 玩家資訊
var palyerName = '航海士';
var palyerShip = './image/gpsGame/position.png';
//寶物
var treaName = '景成船長的大秘寶!';
var treaLocal = './image/gpsGame/treaBoxS.png';
//變數
var gameGps;
var initPosition;
var lati;
var long;
var player;
var playLati;
var playLong;
var playerPosition;
var playerCircle;
var sidePosition;
var sideMarker;
var treaPositionArr = [];
var markers = [];
//設定初始地圖
function initMap(){
	navigator.geolocation.getCurrentPosition(gpsSuccCallback,gpsErrorCallback,{
	navigator.geolocation.getCurrentPosition(gpsSuccCallback, gpsErrorCallback,{
		enableHighAccuracy: true,
		timeout: 60000,
		maximumAge: 3600000,
		maximumAge: 360000,
	});
}
function gpsSuccCallback(e) {
	lati = e.coords.latitude;
	long = e.coords.longitude;
	var accuracy = e.coords.accuracy;
	var area = document.getElementById("gameGpsMap");
	initPosition = new google.maps.LatLng(lati,long);
	var options = {
		zoom : 17,
		center : initPosition,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};
	gameGps = new google.maps.Map(area,options);
	gpsStart();
}
function gpsStart(e) {
	//設定玩家當前位置
	player = new google.maps.Marker({
		position: initPosition,
		map: gameGps,
		icon: palyerShip,
		title: palyerName,
	});
	//一個在旁邊的gps點
	sidePosition = new google.maps.LatLng((lati+0.0005),(long+0.0005));
	sideMarker = new google.maps.Marker({
		position: sidePosition,
		map: gameGps,
		icon: treaLocal,
		title: treaName,
		animation: google.maps.Animation.BOUNCE,
	});
	sideMarker.addListener("click", function(){
		gameGpsLotto();
	});
	//sideMarker.addListener('click', gameGpsLotto());
	//將定位點擺到地圖上
	getTreaPosition();
	dropMarker();
	//隨定位移動
	gameGps.addListener('center_changed', function() {
		window.setTimeout(function() {
			gameGps.panTo(marker.getPosition());
		}, 10000000);
	});
	//以所在點為中心畫一個範圍
	playerCircle = new google.maps.Circle({
		strokeColor: '#a34f49',
		strokeOpacity: 1,
		strokeWeight: 3,
		fillColor: '#a34f49',
		fillOpacity: 0.2,
		map: gameGps,
		center: initPosition,
		radius: 100,
	});
	//偵測寶箱是否在區域內
	// if (google.maps.geometry.poly.isLocationOnEdge(marker, playerCircle, 10e-1)) {
	// 	console.log("get!");
	// };

}
//取得四個隨機出現的gps點
function getTreaPosition() {
	for (let i = 0; i < 5; i++) {
		treaPositionArr.push({lat: lati+0.01*Math.random(),lng: long+0.01*Math.random()});
	};
}
//釘選寶箱地點
function dropMarker(){
	for (var i = 0; i < treaPositionArr.length; i++) {
        markers.push(new google.maps.Marker({
			position: treaPositionArr[i],
			map: gameGps,
			icon: treaLocal,
			title: treaName,
			animation: google.maps.Animation.DROP,
		  }))
		};
}


//錯誤訊息
function gpsErrorCallback(e){
	//document.getElementById('position').innerHTML=`錯誤碼: ${e.code}<br>錯誤訊息: ${e.message}`;
	//顯示需開啟GPS功能
}
//======抽獎============================
var nowNum = 0;//gameGpsLottoActive的位置
var gameGpsLottoStop;//停止的點
var gameGpsLottoTimer;
var gameGpsLottoPrizeType;//0=錢 1=武器
var gameGpsLottoPrizeNum;//第幾個
var gameGpsLottoWeaponArr = [`景成之劍`,`景成之刀`,`景成之鏈`,`景成之匕首`,`景成之標`,`景成之彈`];
var gameGpsLottoBonusArr = [];

for (let i = 0; i < 6; i++) {
	gameGpsLottoBonusArr.push(Math.ceil(Math.random()*10) *100)
}

//跑幾次
function gameGpsLottoRand(min, max) {
	var gameGpsLottoStop = Math.floor(Math.random() * (max - min - 1) + min);
	return gameGpsLottoStop;
}

//速度跟停留的點
function gameGpsLottoRun() {
	nowNum++;
	nowNumActive = nowNum % 12;
	document.getElementById("gameGpsLottoUnit_" + nowNumActive).classList.add("gameGpsLottoActive");
	if (nowNum == gameGpsLottoStop - 5) {
		//從前五格開始減速
		clearInterval(gameGpsLottoTimer);
		gameGpsLottoTimer = setInterval(gameGpsLottoRun, 300);
	}if (nowNum >= gameGpsLottoStop) {
		//消除計時器
		clearInterval(gameGpsLottoTimer);
		//放大兩下
		document.getElementById("gameGpsLottoUnit_"+(nowNum % 12)).classList.remove("gameGpsLottoActive");
		document.getElementById("gameGpsLottoShow").style.borderColor= '#006ca6';//$blue
		document.getElementById("gameGpsLottoShow").style.animation = "gameGpsLottoActiveScale 1.5s 1 both";
		gameGpsLottoShow();
	}
	nowNumActive--;
	if (nowNumActive === -1) {
		document.getElementById("gameGpsLottoUnit_11").classList.remove("gameGpsLottoActive");
	}else{
		document.getElementById("gameGpsLottoUnit_" + nowNumActive).classList.remove("gameGpsLottoActive");

	}
}
//show獎品
function gameGpsLottoShow() {
	var gameGpsLottoShowImg;
	var gameGpsLottoShowMsg;
	gameGpsLottoPrizeType = gameGpsLottoStop % 2;//0=錢 1=武器
	gameGpsLottoPrizeNum = gameGpsLottoStop % 6;//第幾個
	if (gameGpsLottoPrizeNum == 1) {
		gameGpsLottoShowImg = `<img src="image/treasure/trea1.svg" alt="weapon"></img><br>`;
		let weapon  = gameGpsLottoWeaponArr[gameGpsLottoPrizeNum];
		gameGpsLottoShowMsg = `武器-${weapon}<br>`
	} else {
		gameGpsLottoShowImg = `<img src="image/gpsGame/bonus.png" alt="bonus"></img><br>`;
		let bonus  = gameGpsLottoBonusArr[gameGpsLottoPrizeNum];
		gameGpsLottoShowMsg = `金幣${bonus}枚<br>`;
	}
	var gameGpsLottoPrize = `<p class="textM">恭喜您獲得</p>`;
	gameGpsLottoPrize += gameGpsLottoShowImg;
	gameGpsLottoPrize += gameGpsLottoShowMsg;
	gameGpsLottoPrize += `<a class="btnsec" href="#"><span>繼續航行</span></a>`;
	gameGpsLottoPrize += `<a class="btnsec" href="me.html"><span>清點船艙</span></a>`;
	document.getElementById("gameGpsLottoShow").innerHTML= gameGpsLottoPrize;
}
function gameGpsLotto() {
	document.getElementById("gameGpsLotto").style.display = "block";
	gameGpsLottoStop = gameGpsLottoRand(12, 48);
	gameGpsLottoTimer = setInterval(gameGpsLottoRun, 100);
}
//window.addEventListener('load',gameGpsLotto);

<<<<<<< HEAD
//wavebtn
=======
//btn.js
>>>>>>> f956f5462ed40821775d0a6dfee56436a29b59dc
var btnpri = document.getElementsByClassName("btnpri");
var btnsec = document.getElementsByClassName("btnsec");

var waveWidth = 5;

function createbtn(btntype){

    for(var j = 0; j < btntype.length; j++){
        var wavebox = document.createDocumentFragment();

        var width = window.getComputedStyle(btntype[j]).width;
        
        var waveCount = (parseInt(width)+40)/parseInt(waveWidth)+1;

        for (var i = 0; i < waveCount; i++) {
            var wave = document.createElement("div");
            wave.className += " wave";
            wavebox.appendChild(wave);
            wave.style.left = i * waveWidth + "px";
            wave.style.animationDelay = (i / 80) + "s";
        }
        btntype[j].appendChild(wavebox);
    }
}

createbtn(btnpri);
createbtn(btnsec);