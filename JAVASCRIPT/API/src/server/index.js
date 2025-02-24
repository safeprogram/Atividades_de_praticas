import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.get('/api', (req, res) => {
  res.json({ message: 'Bem-vindo à API!' });
});

// Exemplo de rota com dados
const produtos = [
  { id: 1, nome: 'Produto 1', preco: 100 },
  { id: 2, nome: 'Produto 2', preco: 200 },
];

app.get('/api/produtos', (req, res) => {
  res.json(produtos);
});

app.get('/api/produtos/:id', (req, res) => {
  const produto = produtos.find(p => p.id === parseInt(req.params.id));
  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
});

app.post('/api/produtos', (req, res) => {
  const novoProduto = {
    id: produtos.length + 1,
    ...req.body
  };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});