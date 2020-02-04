
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