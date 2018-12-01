	var dobreImie = false;
	var imie = document.getElementById("imie");
	var haslo = document.getElementById("haslo");
		
	
	 function verify(){ 
	 console.log("Verify: wpisano " + imie.value + ".");
	 var Name = imie.value.trim().toLowerCase();
	 console.log("malymiliterami: " + Name + ".");
	 if(Name == "diana") {
		dobreImie = true;  
	   } 
	 
    if(!dobreImie){
	alert("Nie jesteś Diana!");
	return;}	
	   
	   if(haslo.value == "grejfrut"){
	    window.location.href = "wlasciwy.html";
	   } else{
	   alert("Nieprawidłowe hasło!");
	   }  
	 }
	 
	var przycisk = document.getElementById("przycisk");
	var przyciskWyloguj = document.getElementById("wyloguj");
	var nagl = document.getElementById("nagl");
	var mojRuch = true;
		
		przycisk.addEventListener('click',function(){	
			 if(mojRuch) { 
				setTimeout(function(){
				alert("Uśmiechnij się i znowu kliknij przycisk!"); }, 650);
			nagl.style.color = "red";
			nagl.innerHTML = "...od Damiana";
			przycisk.innerHTML = "No kliknij!";
			przyciskWyloguj.style.visibility = "hidden";
			mojRuch = !mojRuch;
			} else {
			nagl.innerHTML="TO jest stronka dla Diany. Buziaki...";
			nagl.style.color = "yellow";
			przycisk.innerHTML = "Kliknij mnie!";
			przyciskWyloguj.style.visibility = "visible";
			mojRuch = !mojRuch;}
		},false);
		
		przyciskWyloguj.addEventListener('click',function(){
			window.location.href = "index.html";
		}, false);