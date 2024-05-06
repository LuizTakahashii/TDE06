// Crie um servidor express que rode na porta 5000

const express = require('express');
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});

app.get('/health', (req, res) => {
    res.send({status : 'runing'});
});

