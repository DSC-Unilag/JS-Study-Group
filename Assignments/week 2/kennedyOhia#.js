let aCidic=6;
let aLkaline= 15;
let nEutral=7;

function pH(x){
	if (x<=aCidic) {
		console.log("ACIDIC");
	}  else if(x<aLkaline) {
		console.log("ALKALINE");
	}  else if (x==nEutral){
		 console.log("NEUTRAL");
	} else {
		console.log("INVALID")
	}
}

pH(3)
