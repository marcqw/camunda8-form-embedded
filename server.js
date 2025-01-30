import express from 'express'
import 'dotenv/config'
import path from 'path';
import { fileURLToPath } from 'url';
import * as c8 from './app/camundaService.js';

const app = express()
const PORT = process.env.PORT || 3000

// Server Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// Router
app.get('/', (req, res) => {
  res.sendFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public', 'newsletter.html'));
})


// Start server
app.listen(PORT, () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});