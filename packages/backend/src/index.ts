import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';
import openaiClient from './lib/openai';

const app = express();
const PORT = process.env.PORT || 4000;
const URL = PORT ? `http://localhost:${PORT}` : 'http://localhost:4000';

const corsOptions = {
  origin: process.env.APP_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.APP_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT'],
    credentials: true,
  },
});

app.get('/', (_req, res) => {
  res.status(200).send('connection success');
});

app.post('/generate/text', async (req, res) => {
  const { prompt, theme } = req.body;
  const text = theme
    ? `下記は「${theme}」というテーマについてのプロンプトです。回答お願いします。\n\n${prompt}`
    : prompt;

  try {
    const response = await openaiClient.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: text }],
    });

    const gptResponse = response.choices[0].message.content;

    res.json({ result: gptResponse });
  } catch (error) {
    console.error('Error with ChatGPT API:', error);
    res.status(500).json({ error: 'エラーが発生しました。再度お試しください。' });
  }
});

io.on('connection', () => {
  console.log('a user connected');
});

server.listen(PORT, () => {
  console.log(`Backend listening on ${URL}`);
});
