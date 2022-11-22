// const slides = [
// 	{
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ]
const slides = [
	{
		"image":"./images/slideshow/slide1.jpg",
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

// selector
// const sliders = document.querySelectorAll("#banner")
// let banner = document.querySelector('#banner');
let arrowLeft = document.querySelector('#arrow_left');
let arrowRight = document.querySelector('#arrow_right');
let slideTwo = document.createElement('img');
// dots
let dots = document.querySelector('.dots');
let dot_selected = document.querySelector('.dot')
dots.innerHTML = "<span class='dot dot_selected '></span><span class='dot'></span><span class='dot'></span><span class='dot'></span>";

arrowLeft.addEventListener('click',() => {
		alert("a gauche");
		// for (let i = 0 > )
	});
	

arrowRight.addEventListener('click',()=>{
	alert("go right");
	// arrowRight();
   });



