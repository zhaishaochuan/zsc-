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
if(IsPC()){
	$("#body").css("height","736px");
	$("#body").css("width","414px");
	$("#zhebu").css({"width":"100%","height":"100%"})
	$(".guanka").css("font-size","20px");
	$(".time").css("font-size","30px");
	$(".suipian").eq(0).css("font-size","20px");
	$(".jieshao").css("font-size","80%");
	$(".shibai").eq(0).css("width","80%");
	
}else{
	geiWidthHeight();
	$("#zhebu").css({"width":"100%","height":"100%"})
	$(".shibai").eq(0).css("width","80%");
	$("#ag").css("font-size","300%");
	$("#shuoming").css("font-size","300%");
	$("#over").css("top","20%");
	$("#over").find("p").css("font-size","250%");
	$("#over").find("p").eq(0).css("font-size","550%");
	$(".chenggonghua1").css("font-size","350%");
	$(".wenzi").find("p").css("font-size","250%");
	$(".wenzi").find("div").css("font-size","300%");
	$(".meiyouzhongjiang").width("100%");
	$(".zhongjiang").width("100%");
	$(".meiyouzhongjiang").find("p").eq(0).css("font-size","400%");
	$(".meiyouzhongjiang").find("p").eq(1).css("font-size","230%");
	$(".meiyouzhongjiang").find("div").eq(0).css("font-size","230%");
	$(".zhongjiang").find("p").eq(0).css("font-size","250%");
	$(".zhongjiang").find("p").eq(1).css("font-size","150%");
	$("lable").css("font-size","230%");
	$("lable").width("40%");
	$("lable").find("input").width("50%");
	$(".tijiao").css("font-size","220%");
	var win = $("#body").width();
	if(win >= 600){
		$(".guanka").css("font-size","500%");
	}
}
$("#heti").find("img").width("60%");
$("#over").width("100%");

$(".meiyouzhongjiang").find("img").width("65%");
for (var i =0 ; i <$(".zhongjiang").length;i++) {
	$(".zhongjiang").eq(i).find("img").eq(0).width("60%");
	$(".zhongjiang").eq(i).find("img").eq(1).width("60%");
}


var guanka = document.getElementsByClassName("guanka")[0];
var arrayGK = ["第一关:水星","第二关:金星","第三关:地球","第四关:火星","第五关:木星","第六关:土星","第七关:天王星","第八关:海王星"];
guanka.innerHTML = arrayGK[0];
var arraySP = ["您获得了1/8碎片","您获得了2/8碎片","您获得了3/8碎片","您获得了4/8碎片","您获得了5/8碎片","您获得了6/8碎片","您获得了7/8碎片","您获得了8/8碎片"];
$(".suipian").eq(0).text(arraySP[0]);
var arrayJS = ["像初恋一样手感的双2.5D弧面玻璃","帮助你防火防盗防女友的眼球识别加密系统","帮你省下单反钱的1300万像素镜头","促进多巴胺分泌的HI-FI音质耳放","可以自动区分女汉子和男妹子的知性美颜系统","快得能让时间变慢的八核1.7GHZ处理器","轻松抓拍多动症患者的PDAF快速相对对焦系统","duang duang duang 效果的Funtouch OS系统"];
$(".jieshao").eq(0).text(arrayJS[0]);
var timeT = 30.00;
var tim;
function timer(){
	tim = setInterval(function(){
		timeT -=0.01;
		timeT = timeT.toFixed(2);
		$(".time").eq(0).text(timeT);
		if(timeT <= 0.00){
			//游戏结束
			gamerOver();
			$(".time").eq(0).text("0.00");
			clearInterval(tim);
		}
	},10)
}
timer();
//随机数
function suiji(min,max){
	return parseInt(Math.random()*(max-min+1)+min);
}
function gamerOver(){
	$("#zhebu").show();
	$("#over").show();
}
$("#ag").on("click",function(){
	$("#zhebu").hide();
	$("#over").hide();
	int();
});
$(".fanhuiyouxi").eq(0).on("click",function(){
	$("#zhebu").hide();
	$("#over").hide();
	$("#heti").hide();
	$(".meiyouzhongjiang").eq(0).hide();
	int();
});
$(".choujiang").eq(0).on("click",function(){
	var num = suiji(0,150);
	if(num == 99){
		//说明是中了手机
		$("#zhebu").show();
		$(".zhongjiang").eq(0).show();
	}else if(num == 10 || num == 50 || num <= 150){
		$(".zhongjiang").eq(1).show();
		$("#zhebu").show();
		//说明是电影票
	}else if(num == 20 || num == 30 | num == 40 ){
		$(".zhongjiang").eq(2).show();
		$("#zhebu").show();
		//说明是充电宝
	}else if(num >= 60 && num < 70){
		$(".zhongjiang").eq(3).show();
		$("#zhebu").show();
		//说明是耳机一个
	}else if(num >= 70 && num <=85){
		$(".zhongjiang").eq(4).show();
		$("#zhebu").show();
		//说明是签名照一张
	}else{
		//说明没中奖
		$("#zhebu").show();
		$(".meiyouzhongjiang").eq(0).show();
	}
});