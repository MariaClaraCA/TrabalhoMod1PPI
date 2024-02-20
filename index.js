import express from 'express';
import process from 'process';
import path from 'path';

const host = 'localhost';
const porta = 3003;

const app = express();

// Define o middleware para servir conteúdo estático do diretório 'publico'
app.use(express.static(path.join(process.cwd(), 'publico')));

// Rota raiz que serve o arquivo conteudo.html
app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'publico', 'conteudo.html'));
});

// Inicia o servidor
app.listen(porta, host, () => {
    console.log(`Servidor escutando em http://${host}:${porta}`);
});
