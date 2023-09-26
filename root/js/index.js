const rate = document.querySelector(".rateBox");
const thank = document.querySelector(".thankBox");
const submit = document.querySelector(".submitBtn");
const rating = document.getElementById("rating");
const val = document.querySelectorAll(".value");
var count = 0;

submit.addEventListener ( "click", () => {
	thank.classList.remove("hide");
	rate.style.display = "none";
});

if (count == 0) {
	submit.setAttribute('disabled', 'disabled');
}

val.forEach((num) => {
	num.addEventListener ("click", () => {
		rating.innerHTML = num.innerHTML;
		count++;
		submit.removeAttribute('disabled');
	});
});


