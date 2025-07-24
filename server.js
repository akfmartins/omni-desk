import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/saudacao', (req, res) => {
  res.json({ mensagem: 'Olá do backend 🎉' });
});

app.listen(3000, () => {
  console.log('Backend rodando na porta 3000');
});