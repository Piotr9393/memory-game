

	
	var cards=["pies-beagle1-1024x683.png","pies-beagle1-1024x683.png","pies-298_m.jpg","Fotolia_34836189_Subscription_XL.jpg","Hotel-Rudy-Pies-Cassi-22.jpg","images.jpg","pies-298_m.jpg","Hotel-Rudy-Pies-Cassi-22.jpg","pies-1605831.jpg","Pies-uśmiech-300x210.jpg","pies-w-domu.jpg","images.jpg","pies-1605831.jpg","Fotolia_34836189_Subscription_XL.jpg","Pies-uśmiech-300x210.jpg","pies-w-domu.jpg"];
	
	var c0=document.getElementById('c0');
	var c1=document.getElementById('c1');
	var c2=document.getElementById('c2');
	var c3=document.getElementById('c3');
	
	var c4=document.getElementById('c4');
	var c5=document.getElementById('c5');
	var c6=document.getElementById('c6');
	var c7=document.getElementById('c7');
	
	var c8=document.getElementById('c8');
	var c9=document.getElementById('c9');
	var c10=document.getElementById('c10');
	var c11=document.getElementById('c11');
	
	var c12=document.getElementById('c12');
	var c13=document.getElementById('c13');
	var c14=document.getElementById('c14');
	var c15=document.getElementById('c15');
	
	c0.addEventListener("click", function(){ dog(0); });
	c1.addEventListener("click", function(){ dog(1); });
	c2.addEventListener("click", function(){ dog(2); });
	c3.addEventListener("click", function(){ dog(3); });
	
	c4.addEventListener("click", function(){ dog(4); });
	c5.addEventListener("click", function(){ dog(5); });
	c6.addEventListener("click", function(){ dog(6); });
	c7.addEventListener("click", function(){ dog(7); });
	
	c8.addEventListener("click", function(){ dog(8); });
	c9.addEventListener("click", function(){ dog(9); });
	c10.addEventListener("click", function(){ dog(10); });
	c11.addEventListener("click", function(){ dog(11); });
	
	c12.addEventListener("click", function(){ dog(12); });
	c13.addEventListener("click", function(){ dog(13); });
	c14.addEventListener("click", function(){ dog(14); });
	c15.addEventListener("click", function(){ dog(15); });
	
	var counter = 8;
	
	var oneVisible=false;
	var visible_nr;
		function dog(nr){
			
			var obraz="url("+cards[nr]+")";
			$('#c'+nr).css('background-image',obraz);
			$('#c'+nr).addClass('cardA');
			
			if(oneVisible==false){
				//first card
				oneVisible=true;
				visible_nr=nr;
			}
			else{
					if(cards[visible_nr]==cards[nr]){
						
						setTimeout(function(){ hide2cards(visible_nr,nr)},750);
						counter--;
						
						if(counter==0){
							
							document.body.innerHTML = '<div style="color:#DAA520;width:500px;height:500px;border:solid 2px black;margin-top:50px;margin-left:auto;margin-right:auto;text-align:center;background-color:lightgray;font-size:65px;padding-top:100px;border-radius:10px;">Great!<br><br> You win !<br><br><br><br></div>';
							
						}
					}
					else{
						setTimeout(function(){ restore2cards(visible_nr,nr)},750);
					}
				
				//second card
				oneVisible=false;
			}
		}
		function hide2cards(nr1,nr2){
			$('#c'+nr1).css('opacity','0');
			$('#c'+nr2).css('opacity','0');
		}
		function restore2cards(nr1,nr2){
			
			$('#c'+nr1).css('background-image','url("question.png")');
			$('#c'+nr1).addClass('card');
			$('#c'+nr1).removeClass('cardA');
			$('#c'+nr2).css('background-image','url("question.png")');
			$('#c'+nr2).addClass('card');
			$('#c'+nr2).removeClass('cardA');
			 
		}
	
