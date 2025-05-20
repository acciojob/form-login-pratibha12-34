function getFormvalue() {
    //Write your code here
	let form =document.querySelector("form");
	form.addEventListener("submit",(e)=>{
		let input= document.querySelector("input");
		alert(`${input.value}`);
	})
