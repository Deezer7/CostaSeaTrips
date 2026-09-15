const express = require("express")

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname))

app.get("/", function(request, responce){

    responce.sendFile(__dirname + ("/index.html"))
})

app.get("/actividades", function(request, responce){
    responce.sendFile(__dirname + ("/actividades.html"))
})

app.get("/about", function(request, responce){
    responce.sendFile(__dirname + ("/about.html"))
})
app.get("/faq", function(request, responce){
    responce.sendFile(__dirname + "/FAQ.html")
})

app.get("/actividades/paseo", function(request, responce){
    responce.sendFile(__dirname + "/paseoEnBarco.html")
})

app.listen(3000, function() {
    console.log("Server running on port 3000")
})