import express from 'express';
import process from 'process';
import path from 'path';

const host = 'localhost';
const porta = 3003;

const app = express();


app.use(express.static(path.join(process.cwd(), 'publico')));


app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'publico', 'conteudo.html'));
});


app.listen(porta, host, () => {
    console.log(`Servidor escutando em http://${host}:${porta}`);
});
