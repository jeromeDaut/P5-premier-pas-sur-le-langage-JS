const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0;

let container = document.getElementById('banner');

const display = ()=>{
	container.innerHTML =	
	`<a href="#" id="arrow_left"><img class="arrow arrow_left" src="./assets/images/arrow_left.png"></a>
	<a href="#" id="arrow_right"><img class="arrow arrow_right" src="./assets/images/arrow_right.png"></a>

	<img class="banner-img" src="./assets/images/slideshow/${slides[index].image}" alt="Banner Print-it">
	<p>${slides[index].tagLine}</p>
	<div class="dots">
	</div>`




	let arrowLeft = document.querySelector('#arrow_left');
	arrowLeft.addEventListener('click',() => {
	index -= 1;
		if (index === -1) {
			index = slides.length -1;
		}
		display();
	});
	
	let arrowRight = document.querySelector('#arrow_right');
	arrowRight.addEventListener('click',()=>{
	index ++;
		if(index === slides.length){
			index = 0;
		}
		display();
   });


// dots
   let dots = document.getElementsByClassName('dots')[0];
   
   for (let i = 0; i < slides.length; i++) {
	 if (index === i) {
		dots.innerHTML += `<a class="dot dot_selected" href="#"></a>`
	 } else {
		dots.innerHTML += `<a class="dot" href="#" onclick="index=${i};display()"></a>`
	 }
	
   }
}
display();
