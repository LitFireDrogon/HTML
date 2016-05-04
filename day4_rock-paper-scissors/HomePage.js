var p1Choose = 0;
var p2Choose;
var timer1;
var timer2;
$("document").ready(function(){
	$("#restart").click(function(){
		window.location.reload();
	});
	$("#scissors").click(function(){
		$("#p1hand").css({"opacity":"0","transition": "opacity 1s ease-out"});
		$("#p2hand").css({"opacity":"0","transition": "opacity 1s ease-out"});
		p1Choose = 1;
		Play(p1Choose);
		SetTime();

	});
	$("#rock").click(function(){
		$("#p1hand").css({"opacity":"0","transition": "opacity 1s ease-out"});
		$("#p2hand").css({"opacity":"0","transition": "opacity 1s ease-out"});
		p1Choose = 2;
		Play(p1Choose);
		SetTime();
	});
	$("#paper").click(function(){
		$("#p1hand").css({"opacity":"0","transition": "opacity 1s ease-out"});
		$("#p2hand").css({"opacity":"0","transition": "opacity 1s ease-out"});
		p1Choose = 3;
		Play(p1Choose);
		SetTime();
	});
	ChangeImg(p1Choose);
});

var imgNum = 1;
//預設猜拳圖片切換
function ChangeImg(p1Choose){
	if(p1Choose==0){
		if(imgNum == 1){
			document.getElementById("p1hand").src="../resource/scissors.png";
			document.getElementById("p2hand").src="../resource/scissors.png";
			document.getElementById("message").innerHTML +="..";
		}
		else if(imgNum == 2){
			document.getElementById("p1hand").src="../resource/rock.png";
			document.getElementById("p2hand").src="../resource/rock.png";
		}
		else if(imgNum == 3){
			document.getElementById("p1hand").src="../resource/paper.png";
			document.getElementById("p2hand").src="../resource/paper.png";
			document.getElementById("message").innerHTML ="Choose One";
			imgNum=0;
		}
		imgNum++;
		timer = setTimeout('ChangeImg(p1Choose)', 500);
	}
}
var id;
function Play(p1Choose){
	if(p1Choose!=0){
		$("#scissors").fadeOut();
		$("#rock").fadeOut();
		$("#paper").fadeOut();	
		document.getElementById("restart").disabled = true;
		$("#restart").css({"cursor": "default"});
		id = setInterval(ReadyToShow,3000);//3秒後將會重複執行ReadyToPlay方法
	}
}
//設定要顯示的圖片並清空計時器
function ReadyToShow(){
	p2Choose = Math.floor((Math.random() * 3)+1); //1~3
	if(p2Choose == 1){
		document.getElementById("p2hand").src="../resource/scissors.png";
	}
	else if(p2Choose == 2){
		document.getElementById("p2hand").src="../resource/rock.png";
	}
	else if(p2Choose == 3){
		document.getElementById("p2hand").src="../resource/paper.png";
	}
	if(p1Choose == 1){
		document.getElementById("p1hand").src="../resource/scissors.png";
	}
	else if(p1Choose == 2){
		document.getElementById("p1hand").src="../resource/rock.png";
	}
	else if(p1Choose == 3){
		document.getElementById("p1hand").src="../resource/paper.png";
	}
	$("#p1hand").css({"opacity":"1","transition": "opacity 1s ease-in"});
	$("#p2hand").css({"opacity":"1","transition": "opacity 1s ease-in"});
	clearTimeout(timer1);
	clearInterval(id);//清除setInterval所返回的id 也就是停止他重複執行
}
var messageTime=3;
//設定倒數計時訊息及勝負訊息
function SetTime(){
	timer2 = setTimeout('SetTime()',1000);
	if(messageTime>0){
		$("#message").css({"text-align": "center"});
		document.getElementById("message").innerHTML = messageTime+"!";
	}
	else{
		clearTimeout(timer2);
		if(p1Choose == p2Choose){
			document.getElementById("message").innerHTML ="Draw!";
		}
		else{
			switch(p1Choose){
				case 1:{
					switch(p2Choose){
						case 2:
							document.getElementById("message").innerHTML ="You lose!";
							break;
						case 3:
							document.getElementById("message").innerHTML ="You win!";
							break;
					}
					break;
				}
				
				case 2:{
					switch(p2Choose){
						case 1:
							document.getElementById("message").innerHTML ="You win!";
							break;
						case 3:
							document.getElementById("message").innerHTML ="You lose!";
							break;
					}	
					break;
				}	
				case 3:{
					switch(p2Choose){
						case 1:
							document.getElementById("message").innerHTML ="You lose!";
							break;
						case 2:
							document.getElementById("message").innerHTML ="You win!";
							break;
					}	
					break;
				}
				default:
					break;
			}
		}
		document.getElementById("restart").disabled = false;
		$("#restart").css({"cursor": "pointer","opacity":"1","transition": "opacity 1s ease-in"});
	}
	messageTime--;
}