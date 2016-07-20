//
var temp = 1;
function chuangJian(){
	temp++;
	var shuLiang = Math.pow(temp,2);
	return shuLiang;
}
function creatImg(){
	if(temp >= 2){
		temp = 2;
	}
	var num = chuangJian();
	var gamer = document.getElementById("gamerMain");
	for (var i = 0;i < num;i++) {
		var div = document.createElement("div");
		div.className = "tupian";
		div.style.width = (gamer.clientWidth - 1*temp)/temp + "px";
		var imgsBo = document.createElement("img");
		imgsBo.src = "img/dingbu.png";
		imgsBo.style.width = "100%";
		var imgs = document.createElement("img");
		imgs.src = "img/baobei.png";
		imgs.className = "baobei";
		imgs.style.width = "65%";
		div.appendChild(imgsBo);
		div.appendChild(imgs);
		gamer.appendChild(div);
	}
	var suiNum = suiji(0,num-1);
	document.getElementsByClassName("baobei")[suiNum].src = "img/guang.png";
	dianji(document.getElementsByClassName("baobei")[suiNum]);
}
creatImg();
//m 表示第几关
var m = 0;
var p = 0;
//碎片和下面的字的索引；
var n =0;
function dianji(xuzheng){
	xuzheng.onclick = function(){
		m++;
		p++;
		if(m >= 8 ){
			m = 7;
		}
		$("#gamerMain").html("");
		guanka.innerHTML = arrayGK[m];
		$(".suipian").eq(0).text(arraySP[n]);
		$(".jieshao").eq(0).text(arrayJS[n]);
		if(n == 0){
			$(".touzi").eq(0).css("left","0%");
		}else if(n == 1){
			$(".touzi").eq(0).css("left","-100%");			
		}else if(n == 2){
			$(".touzi").eq(0).css("left","-200%");
		}else if(n == 3){
			$(".touzi").eq(0).css("left","-300%");
		}else if(n == 4){
			$(".touzi").eq(0).css("left","-400%");
		}else if(n == 5){
			$(".touzi").eq(0).css({"left":"0%","top":"-100%"});
		}else if(n == 6){
			$(".touzi").eq(0).css({"left":"-100%","top":"-100%"});
		}else if(n == 7){
			$(".touzi").eq(0).css({"left":"-210%","top":"-100%"});
		}
		$(".tanchuang").eq(0).show();
		$("#zhebu").show();
		clearInterval(tim);
		dianjitanchuang();
		n++;
	}
}
function dianjitanchuang(){
	var haha = setTimeout(function(){
		$(".tanchuang").eq(0).hide();
		$("#zhebu").hide();
		if(p < 8){
			timer();
			creatImg();
		}else{
			success();
		}
	},2000);
	var tanChuang = document.getElementsByClassName("tanchuang")[0];
	tanChuang.onclick = function(){
		clearTimeout(haha);
		$(".tanchuang").eq(0).hide();
		$("#zhebu").hide();
		if(p < 8){
			timer();
			creatImg();
		}else{
			success();
		}
	}
}
function int(){
	clearInterval(tim);
	$("#gamerMain").html("");
	timeT = 30.00;
	timer();
	m = 0;
	n = 0;
	temp = 1;
	creatImg();
}
var k = 0;
function success(){
	$(".guanka").eq(0).hide();
	$("#main").hide();
	$("#sucess").show();
	hehe = setInterval(function(){
		$(".chenggonghua1").eq(k).fadeIn();
		k++;
		if(k >= 4){
			shoujichoujiang();
			clearInterval(hehe);
		}
	},800);
}
function shoujichoujiang(){
	$(".chenggonghua").eq(0).fadeOut();
	$("#heti").fadeIn();
}
