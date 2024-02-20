import express from 'express';
import process from 'process';
import path from 'path';

const host='0.0.0.0'; // O ip 0.0.0.0 representa todas as interfaces (placas de redee) do computador
const porta = 3001; // porta identifica um programa em execução no host hospedeiiro

const app = express();

app.use(express.static(path.join(process.cwd(), 'publico')));

app.listen(porta, host, ()=>{
    console.log(`Servidor escutando em http://${host}:${porta}`);
})