const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

function dots(numberDot){
	for ( let i = 0; i <numberDot; i++){ 
		var newSpan = document.createElement("span"); // créer un span
		newSpan.classList.add("dot");//ajouter la class dot (represent les bull points) 
		document.getElementById("dot_selected").appendChild(newSpan);// Ajouter le span dans la div dont l'Id est dot_selected
	}
}

dots(slides.length)

let numero = 0;// effectuer la numéroration des slides en créant une variable qui changera en fonction des slide

function ChangeSlide(sens) {//	sens est un paramettre qui permet de sur quelle flèche on clique

	numero = numero + sens;// on peut slider de gauche à droite
	if (numero > slides.length - 1) {
		numero = 0
	}

	if (numero < 0) {
		numero = slides.length - 1
	}

	// les conditions ci-dessus permettent de boucler les slides quand on clique
	document.getElementById("slide").src = "./assets/images/slideshow/" + slides[numero].image//change image
	document.getElementById("tagline").innerHTML = slides[numero].tagLine; // change tagline

	// Met à jour l'état des points
	const dot = document.getElementsByClassName("dot");
	for (let i = 0; i < dot.length; i++) {
		dot[i].classList.remove("dot_selected"); // Supprime la classe de sélection de tous les points
	}
	dot[numero].classList.add("dot_selected"); // Ajoute la classe de sélection au point actif

}

setInterval("ChangeSlide(1)", 4000); // diapo en boucle infinie

let arrow_left = document.querySelector(".arrow_left") // manipuler la flèche gauche
arrow_left.addEventListener("click", function () {
	ChangeSlide(-1);
})

let arrow_right = document.querySelector(".arrow_right") // manipuler la flèche droite
arrow_right.addEventListener("click", function () {
	ChangeSlide(1);
})

