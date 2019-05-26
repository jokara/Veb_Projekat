		
function oceni(ime){
				
	var ocena;
	
	switch(ime){
		
		case 'Baloro': ocena=parseInt(document.baloro_form.ocena.value); break;
		case 'Bergamo': ocena=parseInt(document.bergamo_form.ocena.value); break;
		
	}
	
	alert('dao ocenu: '+ocena);
	localStorage.setItem('ocena'+ime,ocena);
	racunaj(ime);
			
}
			
function racunaj(ime){
				
	if(localStorage.getItem('ocena'+ime)!=null){
		var prosek=12+parseInt(localStorage.getItem('ocena'+ime));
		var prosek=prosek/4;
		alert('prosek: '+prosek);
		localStorage.setItem('prosecna_'+ime,prosek);
					
		var star="";
					
		for(var i=1;i<=prosek;i++){
						
			star+="<img class='img img-fluid' src='star.png' >";
						
		}
		star+="<font size='5'> <br> "+prosek+"</font>";
		document.getElementById('prosecna').innerHTML=star;
	}
	else{
		var prosek=parseInt(localStorage.getItem('prosecna_'+ime));
				
		var star="";
					
		for(var i=1;i<=prosek;i++){
						
			star+="<img class='img img-fluid' src='star.png' >";
						
		}
		star+="<font size='5'> <br> "+prosek+"</font>";
		alert('star: '+star);
		document.getElementById('prosecna').innerHTML=star;
	}
				
}