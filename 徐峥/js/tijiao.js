$(".tijiao").eq(1).on("click",function(){
//	if($("input").eq(0).val() != ""){
		//表示填写正确
		console.log($("#dianyingpiao_name").val());
		$.ajax({
			url:"http://127.0.0.1/160303/徐峥/后台/提交.php",
			type:"get",
			data:{
				"type":"1",
				"name":$("#dianyingpiao_name").val(),
				"phone":$("#dianyingpiao_phone").val()
			},
			success:function(data){
				alert($.parseJSON(data));
			}
		});
//	}else{
//		alert("不能为空");
//	}
});