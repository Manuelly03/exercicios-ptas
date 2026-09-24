import express from 'express';
const app = express();

const tarefas = [
  { id: 1, titulo: 'Estudar Express', concluida: false },
  { id: 2, titulo: 'Estudar JavaScript', concluida: true },
  { id: 3, titulo: 'Testar rotas', concluida: false }
];

app.get('/', (req, res) => {
  res.send('API de Tarefas está funcionando!');
});

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.get('/tarefas/:id', (req, res) => {
    const idBuscado = parseInt(req.params.id);
    const tarefaEncontrada = tarefas.find(t => t.id === idBuscado);

  if (!tarefaEncontrada) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }
  
  res.json(tarefaEncontrada);
});



app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});