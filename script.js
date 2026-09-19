function reserve() {
    
    let wspBtn = document.querySelectorAll(".wspBtn")

    wspBtn.forEach(function(button){

        button.addEventListener("click", function(){
            
        let container = button.closest(".reserva, .reserva1") 
        let pplquant = container.querySelector(".peopleQ")
        const ppl = pplquant.value 
        const message = `Hola, me gustaria reservar paseo en barco para ${ppl} personas.`
        const url = `https://wa.me/622865008?text=${encodeURIComponent(message)}`

        window.open(url, "_blank")
        })
    })
}

reserve()


function nextSlide() {
    galleryImg.classList.add("fade")
    
    setTimeout(function(){
        galleryImg.src = slides[index].image
        galleryText.textContent = slides[index].text

        galleryImg.classList.remove("fade")
    },300)
}

let slides = [
    {
        image: "/sunset1.avif",
        text: "Vistas imprescindibles"
    },
    {
        image: "/yate.jpg",
        text: "Mar infinito"
    },
    {
        image: "/group.jpg",
        text: "Diversión para compartir"
    }
]

let galleryImg = document.querySelector(".galleryImg")
let galleryText = document.querySelector(".galleryText")
let prevBut = document.querySelector(".prev")
let nextBut = document.querySelector(".next")

let index = 0

nextBut.addEventListener("click", function(){

    index ++

    if (index >= slides.length ){
        index = 0
    }

   nextSlide()
})

prevBut.addEventListener("click", function(){
    index --

    if (index == -1) {
        index = 0
    }

    nextSlide()

})




