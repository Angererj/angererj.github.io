// Neu würfeln Player 1
function neuerWurfOne() {
	
	let num = 0;
	let num2 = 0;

	// Neue Zufallszahl bestimmen

	num = Math.floor(Math.random()*6)+1;

	switch (num){
		case 1: document.getElementById('CubeOne').src = "PinClipart_cube_1.png"; break;
		case 2:	document.getElementById('CubeOne').src = "PinClipart_cube_2.png"; break;
		case 3:	document.getElementById('CubeOne').src = "PinClipart_cube_3.png"; break;
		case 4:	document.getElementById('CubeOne').src = "PinClipart_cube_4.png"; break;
		case 5:	document.getElementById('CubeOne').src = "PinClipart_cube_5.png"; break;
		case 6:	document.getElementById('CubeOne').src = "PinClipart_cube_6.png"; break;
	}

	num2 = Math.floor(Math.random()*6)+1;

	switch (num2){
		case 1: document.getElementById('CubeTwo').src = "PinClipart_cube_1.png"; break;
		case 2:	document.getElementById('CubeTwo').src = "PinClipart_cube_2.png"; break;
		case 3:	document.getElementById('CubeTwo').src = "PinClipart_cube_3.png"; break;
		case 4:	document.getElementById('CubeTwo').src = "PinClipart_cube_4.png"; break;
		case 5:	document.getElementById('CubeTwo').src = "PinClipart_cube_5.png"; break;
		case 6:	document.getElementById('CubeTwo').src = "PinClipart_cube_6.png"; break;
	}
	
	sum_player1 = num + num2;

	document.getElementById('sum_player1').innerHTML = sum_player1;

	//Pash überprüfen

	if(num === num2){
		alert("Player 1 hat einen Pasch gewürfelt! " + num + " und " + num2);
	}
}

// Neu würfeln Player 2
function neuerWurfTwo() {
	
	let num = 0;
	let num2 = 0;
	
	// Neue Zufallszahl bestimmen
	
	num = Math.floor(Math.random()*6)+1;

	switch (num){
		case 1: document.getElementById('CubeOne2').src = "PinClipart_cube_1.png"; break;
		case 2:	document.getElementById('CubeOne2').src = "PinClipart_cube_2.png"; break;
		case 3:	document.getElementById('CubeOne2').src = "PinClipart_cube_3.png"; break;
		case 4:	document.getElementById('CubeOne2').src = "PinClipart_cube_4.png"; break;
		case 5:	document.getElementById('CubeOne2').src = "PinClipart_cube_5.png"; break;
		case 6:	document.getElementById('CubeOne2').src = "PinClipart_cube_6.png"; break;
	}
	
	num2 = Math.floor(Math.random()*6)+1;
	
	switch (num2){
		case 1: document.getElementById('CubeTwo2').src = "PinClipart_cube_1.png"; break;
		case 2:	document.getElementById('CubeTwo2').src = "PinClipart_cube_2.png"; break;
		case 3:	document.getElementById('CubeTwo2').src = "PinClipart_cube_3.png"; break;
		case 4:	document.getElementById('CubeTwo2').src = "PinClipart_cube_4.png"; break;
		case 5:	document.getElementById('CubeTwo2').src = "PinClipart_cube_5.png"; break;
		case 6:	document.getElementById('CubeTwo2').src = "PinClipart_cube_6.png"; break;
	}
	
	sum_player2 = num + num2;

	document.getElementById('sum_player2').innerHTML = sum_player2;
	
	//Pash überprüfen
	
	if(num === num2){
		alert("Player 2 hat einen Pasch gewürfelt! " + num + " und " + num2);
	}
}

let wins_player1 = 0;
let wins_player2 = 0;

//loop

setInterval(function (){
	if(document.getElementById('sum_player1').innerHTML != "" && document.getElementById('sum_player2').innerHTML != ""){

		if(sum_player2 > sum_player1){
			alert("Player 2 wins!");
			wins_player2 = wins_player2 + 1;
			document.getElementById('wins_player2').innerHTML = wins_player2;
		}
		if(sum_player2 < sum_player1){
			alert("Player 1 wins!");
			wins_player1 = wins_player1 + 1;
			document.getElementById('wins_player1').innerHTML = wins_player1;
		}
		if(sum_player2 === sum_player1){
			alert("Draw!");
		}
		document.getElementById('sum_player2').innerHTML = "";
		document.getElementById('sum_player1').innerHTML = "";
		
	}
},500);

