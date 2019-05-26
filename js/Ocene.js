		
function oceni(ime){
				
	var ocena;
	
	switch(ime){
		
		case 'Baloro': ocena=parseInt(document.baloro_form.ocena.value); break;
		case 'Bergamo': ocena=parseInt(document.bergamo_form.ocena.value); break;
		case 'Saint': ocena=parseInt(document.saint_forma.ocena.value); break;
		case 'Walter': ocena=parseInt(document.walter_form.ocena.value); break;
		case 'Bw': ocena=parseInt(document.bw_form.ocena.value); break;
		case 'Bucko': ocena=parseInt(document.bucko_forma.ocena.value); break;
		case 'Cake': ocena=parseInt(document.cake_form.ocena.value); break;
		case 'Caribic': ocena=parseInt(document.caribic_form.ocena.value); break;
		case 'Dolce': ocena=parseInt(document.dolce_form.ocena.value); break;
		case 'Good': ocena=parseInt(document.good_forma.ocena.value); break;
		case 'Go': ocena=parseInt(document.go_form.ocena.value); break;
		case 'Grill': ocena=parseInt(document.grill51_form.ocena.value); break;
		case 'Krilca': ocena=parseInt(document.krilca_form.ocena.value); break;
		case 'Marukoshi': ocena=parseInt(document.mar_form.ocena.value); break;
		case 'Mc': ocena=parseInt(document.mc_form.ocena.value); break;
		case 'Poke': ocena=parseInt(document.poke_form.ocena.value); break;
		
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