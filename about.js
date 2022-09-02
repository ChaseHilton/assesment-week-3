console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form Submitted Successfully!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.getElementById("rubberDucky")

img.addEventListener("mouseover", function(evt) {
	alert("Wow cool shirt!")
})