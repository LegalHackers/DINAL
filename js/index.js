// popup

// document.getElementById('popup_button').onclick = removePopup;

// function removePopup() {
// 	document.getElementById('popup').style.visibility = 'hidden';
// }

$(document).ready(function() {

	// HELP TEXT

	$('#only').hover(function() {
		$('#only_help').toggle(500);
	});

	$('#mereIdea').hover(function() {
		$('#mereIdea_help').toggle(500);
	});

	$('#archive').click(function() {
		$('#archive_help').toggle(500);
	});

	//QUESTION PROGRESSION

	$('#start').click(function() {
		$('#popup').fadeIn(500);
	});

	$('#popup_button').click(function() {
		$('#popup').toggle();
		$('.question1').fadeIn(500);
	});

	$('#answer1Button').click(function() {
		$('.question1').toggle();
		$('.question2').fadeIn(500);
	});

	$('#answer2Back').click(function() {
		$('.question2').toggle(100);
		$('.question1').fadeIn(500);		
	});

	$('#answer2Button').click(function() {
		$('.question2').toggle(100);
		$('.question3').fadeIn(500);
	});

	$('#answer3Back').click(function() {
		$('.question3').toggle(100);
		$('.question2').fadeIn(500);		
	});

	$('#answer3Button').click(function() {
		$('.question3').toggle(100);
		$('.question4').fadeIn(500);
	});

	$('#answer4Back').click(function() {
		$('.question4').toggle(100);
		$('.question3').fadeIn(500);		
	});

	$('#answer4Button').click(function() {
		$('.question4').toggle(100);
		$('.question5').fadeIn(500);
	});

	$('#answer5Back').click(function() {
		$('.question5').toggle(100);
		$('.question4').fadeIn(500);		
	});

	$('#answer5Button').click(function() {
		$('.question5').toggle(100);
		$('.question6').fadeIn(500);
	});

	$('#answer6Back').click(function() {
		$('.question6').toggle(100);
		$('.question5').fadeIn(500);		
	});

	// CALCULATE

	var answer2;

	$("#answer2Button").click(function() {
	    answer2=0;
	    if ($('#self-promotion').prop('checked')==true){ 
	        answer2 = answer2 - 10;
	    }	
	    if ($('#commerce').prop('checked')==true){ 
	        answer2 = answer2 - 10;
	    }
	    if ($('#ads').prop('checked')==true){ 
	        answer2 = answer2 - 10;
	    }
	    if ($('#parody').prop('checked')==true){ 
	        answer2 = answer2 + 20;
	    }	
	    if ($('#newsworthy').prop('checked')==true){ 
	        answer2 = answer2 + 20;
	    }	
	    if ($('#remix').prop('checked')==true){ 
	        answer2 = answer2 + 25;
	    }	
	    if ($('#remaster').prop('checked')==true){ 
	        answer2 = answer2 - 10;
	    }	
	    if ($('#transform').prop('checked')==true){ 
	        answer2 = answer2 + 15;
	    }
	    console.log(answer2);
	});


});



// QUESTION BUTTONS








