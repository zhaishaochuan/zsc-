
function geiWidthHeight(){
	var winWidth=0;
	var winHeight=0;
	//获取窗口宽度
	if (window.innerWidth){
	    winWidth = window.innerWidth;
	}else if ((document.body) && (document.body.clientWidth)){
	    winWidth = document.body.clientWidth;
	}
	winWidth = parseInt(winWidth) + "px";
	//获取窗口高度 
	if (window.innerHeight){
		winHeight = window.innerHeight;
	}else if((document.body) && (document.body.clientHeight)){
		winHeight = document.body.clientHeight;
	}
	winHeight = parseInt(winHeight) + "px";
	$("#body").css("height",winHeight);
	$("#body").css("width",winWidth);
}
console.log(IsPC());
if(IsPC()){
	$("#body").css("height","736px");
	$("#body").css("width","414px");
}else{
	geiWidthHeight();
}
//当文字消失之后，一个流星在动以及其他动作
var m = 0;
function wordHideXingQiuDong(){
		$("#superman").fadeIn("500");
		$("#sanguang").animate({
			width:"15%",
			left:"70%",
			top:"25%"
		},1000);
		$("#qiu3").animate({
			left:"20%",
			bottom:"20%"
		},1500);
		$("#qiu").animate({
			width:"10%"
		},1500);
		$("#superman").animate({
			left:"0%",
			top:"20%"
		},1500);
		setTimeout(function(){
			$("#superman").animate({
				left:"-100%",
				top:"0%"
			},3000,function(){
				$(this).hide();
			});
		},1500);
		var timerrr = setInterval(function(){
			if(m % 3 == 0){
				$("#super").attr("src","img/sijiao.png");
			}else if(m % 3 == 1){
				$("#super").attr("src","img/sanxing.png");
			}else if(m % 3 == 2){
				$("#super").attr("src","img/wen.png");
			}
			m++;
			if($("#superman")[0].style.display == "none"){
				phoneShow();
				clearInterval(timerrr);
			}
		},150);
}
//手机旋转出现
var o = 0.001; 
var deg = 0;
function phoneShow(){
	var hehe = setInterval(function(){
		o += 0.004;
		deg += 7.2;
		$("#phone")[0].style.webkitTransform = "scale(" + o + ") rotate(" + deg + "deg)";
		$("#phone")[0].style.transform = "scale(" + o + ") rotate(" + deg + "deg)";
		if(o >= 1){
			pintu();
			clearInterval(hehe);
		}
	},1);
}
//当手机完全出现的时候，其他行星消失，出现拼图，并且消失在很多行星上
function pintu(){
	//其他行星消失
	$("#qiu").fadeOut("500");
	$("#qiu2").fadeOut("500"); 
	$("#qiu3").fadeOut("500");
	$("#sanguang").fadeOut("500");
	//给拼图一个宽高
	var wid = $("#phone").width();
	var hei = $("#phone").height();
	$("#qiqiaoban").css({"width":wid,"height":hei});
	$("#phone").fadeOut(2000);
	$("#qiqiaoban").fadeIn(1500);
	setTimeout(function(){
		suiPianXiaoShi();
		//表示vivo手机完全消失了
		//运行碎片分开并且消失在星球里面
	},3000);
}
//碎片分开并且消失在星球里面
function suiPianXiaoShi(){
	$(".chip1").eq(0).animate({
		left: "100%",
		top: "-10%"
	},500,function(){
		$(".xingqiu").eq(0).show();
		$(this).find("img").eq(1).show();
		setTimeout(function(){
			$(".chip1").eq(0).addClass("suipianxiaoshi");	
			$(".chip1").eq(0).fadeOut(1000);
			jianTouShow();
		},1000);
	});
	$(".chip2").eq(0).animate({
		left: "-85%",
		top: "0%"
	},500,function(){
		$(this).find("img").eq(1).show();
		setTimeout(function(){
			$(".chip2").eq(0).addClass("suipianxiaoshi");
			$(".chip2").eq(0).fadeOut(1000);
		},1000);
	});
	$(".chip3").eq(0).animate({
		left: "-90%",
		top: "50%"
	},500,function(){
		$(this).find("img").eq(1).show();
		setTimeout(function(){
			$(".chip3").eq(0).addClass("suipianxiaoshi");
			$(".chip3").eq(0).fadeOut(1000);
		},1000);
	});
	$(".chip4").eq(0).animate({
		left: "10%",
		top: "-35%"
	},500,function(){
		$(this).find("img").eq(1).show();
		setTimeout(function(){
			$(".chip4").eq(0).addClass("suipianxiaoshi");	
			$(".chip4").eq(0).fadeOut(1000);
		},1000);
	});
	$(".chip5").eq(0).animate({
		left: "32%",
		top: "45%"
	},500,function(){
		$(this).find("img").eq(1).show();
		setTimeout(function(){
			$(".chip5").eq(0).addClass("suipianxiaoshi");
			$(".chip5").eq(0).fadeOut(1000);
		},1000);
	});
	$(".chip6").eq(0).animate({
		left: "55%",
		top: "95%"
	},500,function(){
		$(this).find("img").eq(1).show();
		setTimeout(function(){
			$(".chip6").eq(0).addClass("suipianxiaoshi");	
			$(".chip6").eq(0).fadeOut(1000);
		},1000);
	});
	$(".chip7").eq(0).animate({
		left: "-25%",
		top: "70%"
	},500,function(){
		$(this).find("img").eq(1).show();
		setTimeout(function(){
			$(".chip7").eq(0).addClass("suipianxiaoshi");	
			$(".chip7").eq(0).fadeOut(1000);
		},1000);
	});
	$(".chip8").eq(0).animate({
		left: "85%",
		top: "40%"
	},500,function(){
		$(this).find("img").eq(1).show();
		setTimeout(function(){
			$(".chip8").eq(0).addClass("suipianxiaoshi");	
			$(".chip8").eq(0).fadeOut(1000);
		},1000);
	});
}
//出现下面的向上的小箭头
function jianTouShow(){
	$("#foot").show();
}
//文字一段一段出现，在全部出现之后，延时2秒透明度逐渐减少。最后隐藏
var n = 0;
function yicichuxian(){ 
	var timer = setInterval(function(){
		$("#word")[0].play();
		$(".yicichuxian").eq(n).fadeIn("800");
		n++;
		if(n >= 14){
			$("#word")[0].pause();
			$(".daduanwenzi").eq(0).fadeOut();
			wordHideXingQiuDong()
			clearInterval(timer);
		}
	},800);
}