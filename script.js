function getFormvalue(e) {
    //Write your code here
	let fname= document.getElementById("fname");
	let lname= document.getElementById("lname");
	let form= document.getElementById("form1");
	form.addEventListener("submit",(e)=>{
		e.preventDefault();
		alert(fname.value+lname.value);
		
	})}
