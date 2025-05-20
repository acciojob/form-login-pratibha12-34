function getFormvalue(e) {
    //Write your code here
	e.preventdefault();
	let form =document.querySelector("form");
	form.addEventListener("submit",(e)=>{
		let fname= document.getElementById("fname");
		console.log(fname.value);
		
	});
