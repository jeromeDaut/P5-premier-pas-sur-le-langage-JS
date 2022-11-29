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
	container.innerHTML =	"<a href='' id='arrow_left'><img class='arrow arrow_left' src='./assets/images/arrow_left.png'></a>",
							"<a href='' id='arrow_right'><img class='arrow arrow_left' src='./assets/images/arrow_right.png'></a>",
							"<img class='banner-img' src='' alt='Banner Print-it'>",
							"<p>Impressions tous formats <span>en boutique et en ligne</span></p>",
							"<div class='dots'><div>"



// selector
let arrowLeft = document.querySelector('#arrow_left');
arrowLeft.addEventListener('click',() => {
		index -= 1;
		if (index === -1) {
			index = slides.length -1;
		}

		

	});
	
// let arrowRight = document.querySelector('#arrow_right');
// arrowRight.addEventListener('click',()=>{
// 	alert("go right");
//    });



   let dots = document.querySelector('.dots');
   let dotSelected = document.querySelector('.dot');
//    dots.innerHTML = "<span class='dot dot_selected '></span><span class='dot'></span><span class='dot'></span><span class='dot'></span>";
}
display();
console.log("test");
