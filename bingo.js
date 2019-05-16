//generating numbers for the column of BINGO and storing random value in a variable
//Math.floor(Math.random() * (max - min + 1)) + min;

//returns array of unique numbers in the "B" column
var randB = getRandNum("randB");
document.getElementById("bingo").rows[1].cells.namedItem("randB1").innerHTML = randB[0];
document.getElementById("bingo").rows[2].cells.namedItem("randB2").innerHTML = randB[1];
document.getElementById("bingo").rows[3].cells.namedItem("randB3").innerHTML = randB[2];
document.getElementById("bingo").rows[4].cells.namedItem("randB4").innerHTML = randB[3];
document.getElementById("bingo").rows[5].cells.namedItem("randB5").innerHTML = randB[4];

//returns array of unique numbers in the "I" column
var randI = getRandNum("randI");
document.getElementById("bingo").rows[1].cells.namedItem("randI1").innerHTML = randI[0]
document.getElementById("bingo").rows[2].cells.namedItem("randI2").innerHTML = randI[1]
document.getElementById("bingo").rows[3].cells.namedItem("randI3").innerHTML = randI[2]
document.getElementById("bingo").rows[4].cells.namedItem("randI4").innerHTML = randI[3]
document.getElementById("bingo").rows[5].cells.namedItem("randI5").innerHTML = randI[4]

//returns array of unique numbers in the "N" column
var randN = getRandNum("randN");
document.getElementById("bingo").rows[1].cells.namedItem("randN1").innerHTML = randN[0];
document.getElementById("bingo").rows[2].cells.namedItem("randN2").innerHTML = randN[1];
document.getElementById("bingo").rows[4].cells.namedItem("randN4").innerHTML = randN[2];
document.getElementById("bingo").rows[5].cells.namedItem("randN5").innerHTML = randN[3];

//returns array of unique numbers in the "G" column
var randG = getRandNum("randG");
document.getElementById("bingo").rows[1].cells.namedItem("randG1").innerHTML = randG[0]
document.getElementById("bingo").rows[2].cells.namedItem("randG2").innerHTML = randG[1]
document.getElementById("bingo").rows[3].cells.namedItem("randG3").innerHTML = randG[2]
document.getElementById("bingo").rows[4].cells.namedItem("randG4").innerHTML = randG[3]
document.getElementById("bingo").rows[5].cells.namedItem("randG5").innerHTML = randG[4]

//returns array of unique numbers in the "O" column
var randO = getRandNum("randO");
document.getElementById("bingo").rows[1].cells.namedItem("randO1").innerHTML = randO[0];
document.getElementById("bingo").rows[2].cells.namedItem("randO2").innerHTML = randO[1];
document.getElementById("bingo").rows[3].cells.namedItem("randO3").innerHTML = randO[2];
document.getElementById("bingo").rows[4].cells.namedItem("randO4").innerHTML = randO[3];
document.getElementById("bingo").rows[5].cells.namedItem("randO5").innerHTML = randO[4];

//generating an array of unique random numbers for each column
function getRandNum(idName){
	if (idName == "randB"){
		var arr = []
		while(arr.length < 5){
	    	var randomnumber = oneToFifteen();
	    	if(arr.indexOf(randomnumber) > -1) continue;
	    	arr[arr.length] = randomnumber;
		}//end while
		return arr;
	}
	else if (idName == "randI"){
		var arr = []
		while(arr.length < 5){
	    	var randomnumber = sixteenToThirty();
	    	if(arr.indexOf(randomnumber) > -1) continue;
	    	arr[arr.length] = randomnumber;
		}//end while
		return arr;
	}	
	else if (idName == "randN"){
		var arr = []
		while(arr.length < 4){
	    	var randomnumber = thirtyOneToFiftyFive();
	    	if(arr.indexOf(randomnumber) > -1) continue;
	    	arr[arr.length] = randomnumber;
		}//end while
		return arr;
	}
	else if (idName == "randG"){
		var arr = []
		while(arr.length < 5){
	    	var randomnumber = fourtySixToSixty();
	    	if(arr.indexOf(randomnumber) > -1) continue;
	    	arr[arr.length] = randomnumber;
		}//end while
		return arr;
	}
	else if (idName == "randO"){
		var arr = []
		while(arr.length < 5){
	    	var randomnumber = sixtyOneToSeventyFive();
	    	if(arr.indexOf(randomnumber) > -1) continue;
	    	arr[arr.length] = randomnumber;
		}//end while
		return arr;
	}//end if
}//end getRandNum()

//Generating random numbers 
function oneToFifteen(){
	return Math.floor((Math.random() * 15) + 1);
}

function sixteenToThirty(){
	return Math.floor((Math.random() * 15) + 16);
}

function thirtyOneToFiftyFive(){
	return Math.floor((Math.random() * 15) + 31);
}

function fourtySixToSixty(){
	return Math.floor((Math.random() * 15) + 46);
}
function sixtyOneToSeventyFive(){
	return Math.floor((Math.random() * 15) + 61);
}

//when player gets the value given by the caller
function marker(element){
	document.getElementById(element).style.backgroundColor = "rgb(0, 0, 255)";
	document.getElementById(element).style.color = "rgb(255, 255, 255)";
	document.getElementById(element).innerHTML = "X";
}//end marker()

//gets the players goal
function playerGoal(){
	var row = document.getElementById("row").checked;
	var col = document.getElementById("col").checked;
	var diag = document.getElementById("diag").checked;
	var x = document.getElementById("x").checked;
	var fourC = document.getElementById("fourC").checked;
	var full = document.getElementById("full").checked;
	
	if (row == true){
		//document.getElementById("message").innerHTML = "row";
		return "row";
	}
	else if(col == true){
		//document.getElementById("message").innerHTML = "col";
		return "col";
	}
	else if(diag == true){
		//document.getElementById("message").innerHTML = "diag";
		return "diag";
	}
	else if(x == true){
		
		//document.getElementById("message").innerHTML = "x";
		return "x";
	}
	else if(fourC == true){
		//document.getElementById("message").innerHTML = "t";
		return "fourC";
	}//end if
	else if(full == true){
		//document.getElementById("message").innerHTML = "t";
		return "full";
	}//end if
}//end playerGoal()

function drawNum(){
	var check = true;//true means there are no duplicate calls
	var letters = ["B", "I", "N", "G", "O"];
	var randLetter = letters[Math.floor(Math.random() * 5)];
	var list = document.getElementById("aList");
	
	if (randLetter == "B"){
		var randNumI = oneToFifteen();
		document.getElementById("displayDraw").innerHTML = randLetter + "-" + randNumI.toString();
	}
	else if(randLetter == "I"){
		var randNumI = sixteenToThirty();
		document.getElementById("displayDraw").innerHTML = randLetter + "-" + randNumI.toString();
	}
	else if(randLetter == "N"){
		var randNumN = thirtyOneToFiftyFive();
		document.getElementById("displayDraw").innerHTML = randLetter + "-" + randNumN.toString();
	}
	else if(randLetter == "G"){
		var randNumG = fourtySixToSixty();
		document.getElementById("displayDraw").innerHTML = randLetter + "-" + randNumG.toString();
		
	}
	else if(randLetter == "O"){
		var randNumO = sixtyOneToSeventyFive();
		document.getElementById("displayDraw").innerHTML = randLetter + "-" + randNumO.toString();
	}//end if
}//end drawNum()

function check(){
	//get player goal
	var goal = playerGoal();
	
	//checks if the goal is invalid or valid
	if (goal == "row"){
		var table = document.getElementById("bingo");
		for (var i = 1, row; row = table.rows[i]; i++) {
			//iterate through rows
		    //rows would be accessed using the "row" variable assigned in the for loop
			var isBlue = document.getElementById("bingo").rows[i].cells[0]
			if(isBlue.style.backgroundColor == "rgb(0, 0, 255)"){
				var check = true;
				for (var j = 0, col; col = row.cells[j]; j++) {
					var checkRow = document.getElementById("bingo").rows[i].cells[j];
		     		//iterate through columns
		   			//columns would be accessed using the "col" variable assigned in the for loop
					if(checkRow.style.backgroundColor !== "rgb(0, 0, 255)"){
						document.getElementById("message").innerHTML = "Sorry, this is not a valid BINGO";
						check = false;
					}//end if
		   	 	}//end for columns
				if(check == true){
					//document.getElementById("message").innerHTML = "CONGRAGULATIONS!!! BINGO!!! WINNER!!!";
					congratz();
					break;
				}//end if
			}//end if
		}//end for rows
	}
	else if (goal == "col"){
		var table = document.getElementById("bingo");
		for (var i = 0, row; row = table.rows[i]; i++) {
		   //iterate through rows
		   //rows would be accessed using the "row" variable assigned in the for loop
		   for (var j = 0, col; col = row.cells[j]; j++) {
			   var isBlue = document.getElementById("bingo").rows[i].cells[j].style.backgroundColor;
			   var isBlue1 = document.getElementById("bingo").rows[1].cells[j].style.backgroundColor;
			   var isBlue2 = document.getElementById("bingo").rows[2].cells[j].style.backgroundColor;
			   var isBlue3 = document.getElementById("bingo").rows[3].cells[j].style.backgroundColor;
			   var isBlue4 = document.getElementById("bingo").rows[4].cells[j].style.backgroundColor;
			   var isBlue5 = document.getElementById("bingo").rows[5].cells[j].style.backgroundColor;
			   
			   //iterate through columns
			   //columns would be accessed using the "col" variable assigned in the for loop
			   if(isBlue == "rgb(0, 0, 255)"){
				   if(isBlue1 == "rgb(0, 0, 255)" && isBlue2 == "rgb(0, 0, 255)" && isBlue3 == "rgb(0, 0, 255)" && isBlue4 == "rgb(0, 0, 255)" && isBlue5 == "rgb(0, 0, 255)"){
					   //document.getElementById("message").innerHTML = "CONGRAGULATIONS!!! BINGO!!! WINNER!!!";
					   congratz();
					   break;
				   }
				   else {
					   document.getElementById("message").innerHTML = "Sorry, this is not a valid BINGO";
				   }//end if
			   }//end if
		   }//end for cells  
		}//end for rows
	}
	else if (goal == "diag"){
	   var isBlue1 = document.getElementById("bingo").rows[1].cells[0].style.backgroundColor;
	   var isBlue2 = document.getElementById("bingo").rows[2].cells[1].style.backgroundColor;
	   var isBlue3 = document.getElementById("bingo").rows[3].cells[2].style.backgroundColor;
	   var isBlue4 = document.getElementById("bingo").rows[4].cells[3].style.backgroundColor;
	   var isBlue5 = document.getElementById("bingo").rows[5].cells[4].style.backgroundColor;
	   
	   var isBlue11 = document.getElementById("bingo").rows[1].cells[4].style.backgroundColor;
	   var isBlue22 = document.getElementById("bingo").rows[2].cells[3].style.backgroundColor;
	   var isBlue33 = document.getElementById("bingo").rows[3].cells[2].style.backgroundColor;
	   var isBlue44 = document.getElementById("bingo").rows[4].cells[1].style.backgroundColor;
	   var isBlue55 = document.getElementById("bingo").rows[5].cells[0].style.backgroundColor;
	   
	   if(isBlue1 == "rgb(0, 0, 255)" && isBlue2 == "rgb(0, 0, 255)" && isBlue3 == "rgb(0, 0, 255)" && isBlue4 == "rgb(0, 0, 255)" && isBlue5 == "rgb(0, 0, 255)"){
		   //document.getElementById("message").innerHTML = "CONGRAGULATIONS!!! BINGO!!! WINNER!!!";
		   congratz();
	   }
	   else if (isBlue11 == "rgb(0, 0, 255)" && isBlue22 == "rgb(0, 0, 255)" && isBlue33 == "rgb(0, 0, 255)" && isBlue44 == "rgb(0, 0, 255)" && isBlue55 == "rgb(0, 0, 255)"){
		   //document.getElementById("message").innerHTML = "CONGRAGULATIONS!!! BINGO!!! WINNER!!!";
		   congratz();
	   }
	   else{
		   document.getElementById("message").innerHTML = "Sorry, this is not a valid BINGO";
	   }//end if
	}
	else if (goal == "x"){
 	   var isBlue1 = document.getElementById("bingo").rows[1].cells[0].style.backgroundColor;
 	   var isBlue2 = document.getElementById("bingo").rows[2].cells[1].style.backgroundColor;
 	   var isBlue3 = document.getElementById("bingo").rows[3].cells[2].style.backgroundColor;
 	   var isBlue4 = document.getElementById("bingo").rows[4].cells[3].style.backgroundColor;
 	   var isBlue5 = document.getElementById("bingo").rows[5].cells[4].style.backgroundColor;
	   
 	   var isBlue11 = document.getElementById("bingo").rows[1].cells[4].style.backgroundColor;
 	   var isBlue22 = document.getElementById("bingo").rows[2].cells[3].style.backgroundColor;
 	   var isBlue44 = document.getElementById("bingo").rows[4].cells[1].style.backgroundColor;
 	   var isBlue55 = document.getElementById("bingo").rows[5].cells[0].style.backgroundColor;
	   if(isBlue1 == "rgb(0, 0, 255)" && isBlue2 == "rgb(0, 0, 255)" 
		   && isBlue3 == "rgb(0, 0, 255)" && isBlue4 == "rgb(0, 0, 255)" 
		   && isBlue5 == "rgb(0, 0, 255)" && isBlue11 == "rgb(0, 0, 255)" 
	   	   && isBlue22 == "rgb(0, 0, 255)"&& isBlue44 == "rgb(0, 0, 255)" && isBlue55 == "rgb(0, 0, 255)"){
		   	//document.getElementById("message").innerHTML = "CONGRAGULATIONS!!! BINGO!!! WINNER!!!";
			congratz();
		}
		else{
		   	document.getElementById("message").innerHTML = "Sorry, this is not a valid BINGO";
		}//end if
	}
	else if (goal == "fourC"){
		var isBlue1 = document.getElementById("bingo").rows[1].cells[0].style.backgroundColor;
		var isBlue2 = document.getElementById("bingo").rows[1].cells[4].style.backgroundColor;
  	   	var isBlue3 = document.getElementById("bingo").rows[5].cells[0].style.backgroundColor;
		var isBlue4 = document.getElementById("bingo").rows[5].cells[4].style.backgroundColor;
		
		if (isBlue1 == "rgb(0, 0, 255)" && isBlue2 == "rgb(0, 0, 255)" 
		&& isBlue3 == "rgb(0, 0, 255)" && isBlue4 == "rgb(0, 0, 255)"){
			//document.getElementById("message").innerHTML = "CONGRAGULATIONS!!! BINGO!!! WINNER!!!";	
			congratz();
		}
		else{
			document.getElementById("message").innerHTML = "Sorry, this is not a valid BINGO";
		}//end if	
	}//end if	
	else if (goal == "full"){
		var isBlue1 = document.getElementById("bingo").rows[1].cells[0].style.backgroundColor;
	   	var isBlue2 = document.getElementById("bingo").rows[1].cells[1].style.backgroundColor;
	   	var isBlue3 = document.getElementById("bingo").rows[1].cells[2].style.backgroundColor;
		var isBlue4 = document.getElementById("bingo").rows[1].cells[3].style.backgroundColor;
		var isBlue5 = document.getElementById("bingo").rows[1].cells[4].style.backgroundColor;
		
		var isBlue6 = document.getElementById("bingo").rows[2].cells[0].style.backgroundColor;
	   	var isBlue7 = document.getElementById("bingo").rows[2].cells[1].style.backgroundColor;
	   	var isBlue8 = document.getElementById("bingo").rows[2].cells[2].style.backgroundColor;
		var isBlue9 = document.getElementById("bingo").rows[2].cells[3].style.backgroundColor;
		var isBlue10 = document.getElementById("bingo").rows[2].cells[4].style.backgroundColor;
		
		var isBlue11 = document.getElementById("bingo").rows[3].cells[0].style.backgroundColor;
	   	var isBlue12 = document.getElementById("bingo").rows[3].cells[1].style.backgroundColor;
	   	var isBlue13 = document.getElementById("bingo").rows[3].cells[2].style.backgroundColor;
		var isBlue14 = document.getElementById("bingo").rows[3].cells[3].style.backgroundColor;
		var isBlue15 = document.getElementById("bingo").rows[3].cells[4].style.backgroundColor;
		
		var isBlue16 = document.getElementById("bingo").rows[4].cells[0].style.backgroundColor;
	   	var isBlue17 = document.getElementById("bingo").rows[4].cells[1].style.backgroundColor;
	   	var isBlue18 = document.getElementById("bingo").rows[4].cells[2].style.backgroundColor;
		var isBlue19 = document.getElementById("bingo").rows[4].cells[3].style.backgroundColor;
		var isBlue20 = document.getElementById("bingo").rows[4].cells[4].style.backgroundColor;
		
		var isBlue21 = document.getElementById("bingo").rows[5].cells[0].style.backgroundColor;
	   	var isBlue22 = document.getElementById("bingo").rows[5].cells[1].style.backgroundColor;
	   	var isBlue23 = document.getElementById("bingo").rows[5].cells[2].style.backgroundColor;
		var isBlue24 = document.getElementById("bingo").rows[5].cells[3].style.backgroundColor;
		var isBlue25 = document.getElementById("bingo").rows[5].cells[4].style.backgroundColor;
		if (isBlue1 == "rgb(0, 0, 255)" && isBlue2 == "rgb(0, 0, 255)" 
			&& isBlue3 == "rgb(0, 0, 255)" && isBlue4 == "rgb(0, 0, 255)" 
			&& isBlue5 == "rgb(0, 0, 255)" && isBlue6 == "rgb(0, 0, 255)" 
			&& isBlue7 == "rgb(0, 0, 255)" && isBlue8 == "rgb(0, 0, 255)"
			&& isBlue9 == "rgb(0, 0, 255)" && isBlue10 == "rgb(0, 0, 255)"
			&& isBlue11 == "rgb(0, 0, 255)" && isBlue12 == "rgb(0, 0, 255)"
			&& isBlue13 == "rgb(0, 0, 255)" && isBlue14 == "rgb(0, 0, 255)"
			&& isBlue15 == "rgb(0, 0, 255)" && isBlue16 == "rgb(0, 0, 255)"
			&& isBlue17 == "rgb(0, 0, 255)" && isBlue18 == "rgb(0, 0, 255)"
			&& isBlue19 == "rgb(0, 0, 255)" && isBlue20 == "rgb(0, 0, 255)"
			&& isBlue21 == "rgb(0, 0, 255)" && isBlue22 == "rgb(0, 0, 255)"
			&& isBlue23 == "rgb(0, 0, 255)" && isBlue24 == "rgb(0, 0, 255)"){
				congratz();
			}
		else {
			document.getElementById("message").innerHTML = "Sorry, this is not a valid BINGO";
		}//end if
	}//end if
}//end check()

function congratz(){
	window.document.location.href = 'bingoCongratz.html';
}//end congratz()
