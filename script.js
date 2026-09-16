function reserve() {
    let pplQuant = document.querySelector(".peopleQ")
    let wspBtn = document.querySelector(".wspBtn")

    wspBtn.addEventListener("click", function(){

        const ppl = pplQuant.value 
        const message = `Hola, me gustaria reservar paseo en barco para ${ppl} personas.`
        const url = `https://wa.me/622865008?text=${encodeURIComponent(message)}`

        window.open(url, "_blank")
    
    })
}

reserve()