/*
(function() {

	$(document).ready(() => {

		

		for(i = 0; i < 10; i++) {
			$("#damier").append('<div class="line line'+ i +'"></div>');
			for(j = 0; j < 10; j++){
				$(".line"+ i).append('<div class="column column'+ j +' case"></div>');
			}
		}
		for (i = 0; i < 10; i++){
			if ( i % 2 == 0){
				for (j= 0; j<10; j++) {
					if(j % 2 == 0){
						$(".line" + i + " .column" + j ).css("background-color", "black");
					}
					else{
						$(".line" + i + " .column" + j ).css("background-color", "white");
					}
				}
			}
			else{
				for (j= 0; j<10; j++) {
					if(j % 2 == 0){
						$(".line" + i + " .column" + j ).css("background-color", "white");
					}
					else{
						$(".line" + i + " .column" + j ).css("background-color", "black");
					}
				}
			}
		}
		
	});

}) ();

 */

class Damier {
	constructor(dest,longueur,hauteur){

		let css_black =  {
			'display'	   : 'inline-block',
			'background-color' : 'black',
			'color'		   : 'white',
			'min-width'        : '70px',
			'min-height' 	   : '70px'
		};
		let css_white = {
			'display'	   : 'inline-block',
			'background-color' : 'white',
			'color'		   : 'black',
			'min-width'        : '70px',
			'min-height' 	   : '70px'
		};

		let new_css = {
			'display'	   : 'inline-block',
			'background-color' : 'blue',
			'color'		   : 'black',
			'min-width'        : '70px',
			'max-width' 	   : '70px'
		};

		let hover = function() {
			$(this).css(new_css)
		};

		let out = function() {
			$(this).css($(this).data('css_case'))
		};


		for(let y=0;y<longueur;y++) {
			let ligne = $('<div></div>');
			$(dest).append(ligne);
			for(let x=0; x<hauteur;x++) {
				ligne.append(
					$('<div></div>')
						.css((x+y) % 2 ? css_black : css_white)
						.append("&nbsp;")
						.data('css_case',(x+y) % 2 ? css_black : css_white)
						.mouseover(hover)
						.mouseleave(out)

				);
			}
		}

	}
}

(function() {
	'use strict' ;
	$(document).ready(function() {
	new Damier('#damier', 3, 3);
	});


}) ();
