

window.onload = () => {

	const item1 = document.getElementById("level");
	const doml = finddomlevel(item1);
    console.log("pass");
	alert(`The level of the element is: ${doml}`);
};



//your JS code here. If required.
function finddomlevel(element) {

	let domcount=0;
	let currentelement = element;
	while(currentelement.parentNode){
		currentelement = currentelement.parentNode;
		domcount++;
	}

	return domcount;
	
}