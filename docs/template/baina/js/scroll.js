window.onload=function(){
				var odiv = document.getElementById('div1');
				var oul = odiv.getElementsByTagName('ul')[0];
				var ali = oul.getElementsByTagName('li');
				var spa = -2;				
				oul.innerHTML=oul.innerHTML+oul.innerHTML;
				oul.style.width=ali[0].offsetWidth*ali.length+'px';
				function move(){
					if(oul.offsetLeft<-oul.offsetWidth/2){
						oul.style.left='0';
					}
					if(oul.offsetLeft>0){
						oul.style.left=-oul.offsetWidth/2+'px'
					}
					oul.style.left=oul.offsetLeft+spa+'px';
				}
				var timer = setInterval(move,30)
				
				odiv.onmousemove=function(){clearInterval(timer);}
				odiv.onmouseout=function(){timer = setInterval(move,30)};
				document.getElementsByTagName('a')[0].onclick = function(){
					spa=-2;
				}
				document.getElementsByTagName('a')[1].onclick = function(){
					spa=2;
				}
			}



$(document).ready(function() {
	$("#login").bind("submit",function(e){  
	  var active=$(".list_act").val();  
	  var card=$(".card").val();   
	  var re=/^1[34578]\d{9}$/;
	  if(active=="请选择"){alert("选项不能为空！");return false;}
    else if(card==""){alert("电话号码不能为空！");return false;}
    else if(!re.test(card)){     
      alert('请输入正确的手机号码。');      
      return false;  
    }   
    return true;
	})	
});