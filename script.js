function reserve() {
    
    let wspBtn = document.querySelectorAll(".wspBtn")

    wspBtn.forEach(function(button){

        button.addEventListener("click", function(){
            
        let container = button.closest(".reserva") 
        let pplquant = container.querySelector(".peopleQ")
        const ppl = pplquant.value 
        const message = `Hola, me gustaria reservar paseo en barco para ${ppl} personas.`
        const url = `https://wa.me/622865008?text=${encodeURIComponent(message)}`

        window.open(url, "_blank")
        })
    })
}

reserve()