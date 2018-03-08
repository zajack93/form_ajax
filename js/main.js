"use strict";

function validation (e) {
	
	var allText=document.querySelectorAll("input[type=text]");  //tworze kolekcje jquery
	
	
	for (var i=0; i<allText.length; i++) {
//		console.log("ilosc elementow:" + i);
		if (allText[i].value==""){
			e.preventDefault();
			var paragraph = document.createElement("p");
			paragraph.innerHTML = "To pole jest wymagane!";
			paragraph.style.color = "red";
			allText[i].parentNode.replaceChild(paragraph, allText[i].nextSibling);
		}
	}
	
	
}	

var solution = document.getElementById("send").addEventListener("click", validation);


