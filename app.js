import express from 'express';
const app = express();

const tarefas = [
  { id: 1, titulo: 'Estudar Express', concluida: false },
  { id: 2, titulo: 'Estudar JavaScript', concluida: true },
  { id: 3, titulo: 'Testar rotas', concluida: false }
];

app.get('/tarefas', (req, res) => {
  const { concluida } = req.query; 

  if (concluida !== undefined) {
    const statusBuscado = concluida === 'true';
    const tarefasFiltradas = tarefas.filter(t => t.concluida === statusBuscado);
    return res.json(tarefasFiltradas); 
  }
  res.json(tarefas); 
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
