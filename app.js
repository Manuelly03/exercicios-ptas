import express from 'express';
const app = express();

const tarefas = [
  { id: 1, titulo: 'Estudar Express', concluida: false },
  { id: 2, titulo: 'Estudar JavaScript', concluida: true },
  { id: 3, titulo: 'Testar rotas', concluida: false }
];

app.post('/tarefas', (req, res) => {
  const { titulo } = req.body;
  const novaTarefa = {
    id: tarefas.length + 1,
    titulo: titulo,
    concluida: false
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
