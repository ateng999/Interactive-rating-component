const rate = document.querySelector(".rateBox");
const thank = document.querySelector(".thankBox");
const submit = document.querySelector(".submitBtn");
const rating = document.getElementById("rating");
const val = document.querySelectorAll(".value");

submit.addEventListener ( "click", () => {
	thank.classList.remove("hide");
	rate.style.display = "none";
});

val.forEach((num) => {
	num.addEventListener ("click", () => {
		rating.innerHTML = num.innerHTML;
	});
});