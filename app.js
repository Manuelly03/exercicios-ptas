import express from 'express';
const app = express();

const tarefas = [
  { id: 1, titulo: 'Estudar Express', concluida: false },
  { id: 2, titulo: 'Estudar JavaScript', concluida: true },
  { id: 3, titulo: 'Testar rotas', concluida: false }
];

function autenticacao(req, res, next) {
  console.log('-> [Middleware 1]: Verificando autenticação...');
  next(); 
}

function validarCorpo(req, res, next) {
  console.log('-> [Middleware 2]: Validando dados enviados...');
  const { titulo } = req.body;

  if (!titulo || titulo.trim() === '') {
    return res.status(400).json({ erro: 'O campo "titulo" é obrigatório' });
  }
  next();
}

function logger(req, res, next) {
  console.log('-> [Middleware 3]: Registro de log da ação...');
  next();
}

app.post('/tarefas', [autenticacao, validarCorpo, logger], (req, res) => {
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
