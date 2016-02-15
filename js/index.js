// popup

// document.getElementById('popup_button').onclick = removePopup;

// function removePopup() {
// 	document.getElementById('popup').style.visibility = 'hidden';
// }

$(document).ready(function() {

	$('#popup_button').click(function() {
		$('#popup').fadeOut(500);
	});

	// HELP TEXT

	$('#mereIdea').click(function() {
		$('#mereIdea_help').toggle(500);
	});

	$('#archive').click(function() {
		$('#archive_help').toggle(500);
	});

	//QUESTION PROGRESSION

	$('#start').click(function() {
		$('.question1').fadeIn(500);
	});

	$('#answer1Button').click(function() {
		$('.question1').toggle(100);
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

	var finalScore = 0;

	$('#allDone').click(function() {

		// $("#answer1").find("checkbox").each(function(){
	    	if ($('#feds').prop('checked')==true){ 
	        	finalScore = finalScore + 25;
	    	}	else {finalScore=finalScore}

	    	$('#result').html(finalScore);

	    	console.log(finalScore)

	});

});

// QUESTION BUTTONS








