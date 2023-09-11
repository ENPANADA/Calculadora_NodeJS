const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req, res){
    let result = Number(req.body.num1) + Number(req.body.num2);
    res.send('<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Calculadora NodeJS</title></head><body height: 100vh; margin: 0; style="display: flex; flex-direction: row; align-items: center; justify-content: center; background-color: #1f1f1f;"><center><h3 style="color: rgb(29, 132, 216); margin: 0; font-size: 30px; font-weight: bold;">El resultado es: </h3><h2 style="color: azure; margin: 50px 0; font-size: 35px; font-weight: bold;">' + result + '</h2><a href="/"><button style="background-color: rgb(29, 132, 216); padding: 10px; margin: 0; font-weight: bold; color: azure; border: 5px solid azure; font-size: 15px; border-radius: 10px; cursor: pointer;">Volver</button></a></center></body></html>');
})


app.listen(PORT, () => {
    console.log('Escuchando en el puerto:', PORT)
})
