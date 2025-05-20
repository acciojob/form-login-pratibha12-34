function getFormvalue(e) {
    //Write your code here
	let fname= document.getElementById("fname");
	let lname= document.getElementById("lname");
	let btn=document.querySelector("btn");
	btn.addEventListener("onclick",(e)=>{
		
		alert(`${fname.value}`);
		
	});}
