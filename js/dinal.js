// DINAL Algorithm

var a1 = $('#answer1')
var a2 = $('#answer2')
var a3 = $('#answer3')
var a4 = $('#answer4')
var a5 = $('#answer5')
var a6 = $('#answer6')

a1 + a2 + a3 + a4 + a5 + a6 = finalScore

$('#allDone').click(function() {
	
	if (finalScore>=30){
		//pr
	}
});

function printFinalScore () {
	if (finalScore >= 30) {
		//load green
	} else if (finalScore >= 10) {
		//load yellow
	} else {
		//load red
	}
};