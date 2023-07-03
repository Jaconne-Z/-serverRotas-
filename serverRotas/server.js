const express = require('express');

const app = express();

app.get('/Home', (req, res)  =>{
    return res.send('Resposta ao Servidor');
});

app.get('/About', (req, res) =>{
    return res.send('Resposta Alternativa ao Servidor');
});

app.get('/Whyus', (req, res) =>{
    return res.send('Resposta 3 ao Servidor');
});

app.get('/Reviews', (req, res) =>{
    return res.send('resposta 4 ao Servidor');
})

app.listen('3301', console.log ('Servidor Ativado 3301') );