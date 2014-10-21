



var elemList = [ 
["H", 1.00794],
["He", 4.0026],
["Li",6.941],
["Be",9.0122],
["B",10.811],
["C",12.0107],
["N",14.0067],
["O",15.9994],
["F",18.9984],
["Ne",20.1797],
["Na",22.9897],
["Mg",24.305],
["Al",26.9815],
["Si",28.0855],
["P",30.9738],
["S",32.065],
["Cl",35.453],
["Ar",39.948],
["K",39.0983],
["Ca",40.078],
["Sc",44.9559],
["Ti",47.867],
["V",50.9415],
["Cr",51.9961],
["Mn",54.938],
["Fe",55.845],
["Co",58.9332],
["Ni",58.6934],
["Cu",63.546],
["Zn",65.39],
["Ga",69.723],
["Ge",72.64],
["As",74.9216],
["Se",78.96],
["Br",79.904],
["Kr",83.8],
["Rb",85.4678],
["Sr",87.62],
["Y",88.9059],
["Zr",91.224],
["Nb",92.9064],
["Mo",95.94],
["Tc",98],
["Ru",101.07],
["Rh",102.9055],
["Pd",106.42],
["Ag",107.8682],
["Cd",112.411],
["In",114.818],
["Sn",118.71],
["Sb",121.76],
["Te",127.6],
["I",126.9045],
["Xe",131.293],
["Cs",132.9055],
["Ba",137.327],
["La",138.9055],
["Ce",140.116],
["Pr",140.9077],
["Nd",144.24],
["Pm",145],
["Sm",150.36],
["Eu",151.964],
["Gd",157.25],
["Tb",158.9253],
["Dy",162.5],
["Ho",164.9303],
["Er",167.259],
["Tm",168.9342],
["Yb",173.04],
["Lu",174.967],
["Hf",178.49],
["Ta",180.9479],
["W",183.84],
["Re",186.207],
["Os",190.23],
["Ir",192.217],
["Pt",195.078],
["Au",196.9665],
["Hg",200.59],
["Tl",204.3833],
["Pb",207.2],
["Bi",208.9804],
["Po",209],
["At",210],
["Rn",222],
["Fr",223],
["Ra",226],
["Ac",227],
["Th",232.0381],
["Pa",231.0359],
["U",238.0289],
["Np",237],
["Pu",244],
["Am",243],
["Cm",247],
["Bk",247],
["Cf",251],
["Es",252],
["Fm",257],
["Md",258],
["No",259],
["Lr",262],
["Rf",261],
["Db",262],
["Sg",266],
["Bh",264],
["Hs",277],
["Mt",268],
];

var i=0;
var j=0;
for (i=0; i<elemList.length; i++){
  console.log (elemList[i]);
  console.log (elemList[i][0]);
  console.log (elemList[i][1]);
	/*for (j=0; j<elemList[i].length; j++) {
		if (j===0) {
			document.write(elemList[i][j] + ": ");
		} else if (j=== elemList[i].length -1) {
			document.write(elemList[i][j] + "<br />");
		} else {
			document.write(elemList[i][j] + ",");
		}
		}*/
		}

    function populateForm() {
      var elem = document.getElementById("elem").value;
      var moles = document.getElementById("numOfMoles").value;
      var molesGram = document.getElementById("molesGram").value;
      for (var i=0; i<elemList.length; i++){
        if (elemList[i][0]==elem) {
          console.log(i);
          document.getElementById("atomicMass").value = elemList[i][1];
          document.getElementById("molesGram").value = elemList[i][1]*moles;
          document.getElementById("oz").value = elemList[i][1] * moles * .035274;
        }
      }
    }

function resetInputs(){
  document.getElementById("moleform").reset();
  }

/*function contains(elemList, obj) {
	var theForm = document.forms["moleform"];
    for (var i = 0; i < elemList.length; i++) {
        if (elemList[i] === theForm.elements.elem.value) {
            document.write(elemList[i][j]);
        }
    }
    return false;
}
var elem1List = new Array();
elem1List["H"]=1.00794;
elem1List["He"]=4.0026;

function getElem() {
	var getElem=0;
	var theForm = document.forms["moleform"];
	var selectedElem = theForm.elements["elem"].value;
	theElem = elem1List[selectedElem.value];
	document.write(getElem);
}
	
function calcMass() {
if (document.moleform.elem.value = elemlist[i]) {
document.moleform.atomicMass.value = elemList[i][j]
}};

/*var calcMass = document.getElementById("elem");
calcMass.onclick = function() {
	atomicMass.innerHTML = "Right now";
	return false;
};

/*if (array.indexOf(value) < 0){ //doesn't exist
//do something
else{//does exist
	//do something else

}}*/
/*var oForm = document.forms["moleform"];
var elem = oForm.elements[1];
var elemInput = elem.value;
   for(var i in elemList) {
       var arrayElement = elemList[i];
       if (arrayElement == elemInput) {
            alert("There's a match")
       }
   }
   /*
   if ($.inArray(formInput,myArray)>=0) { // returns -1 if no match
   alert("There's a match!");

$(searchinput).on("blur", function() {
   if ($.inArray(formInput,myArray) > -1) {
      alert("There's a match!");
   }
});*/

/*atomicMass["H"]= 1.00794;
atomicMass["He"]= 4.0026;*/

 /*var search = document.getElementById("search");
 var data = ["yay"];

 search.onclick = function() {
    var formInput = document.getElementById("formInput").value;

    for (i=0; i<data.length; i++){
       if (data[i] == formInput) {
          alert(data[i]);
       } else {
          alert("not working yet");
       }
    }
 };*/