const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  const hasAiKey = Boolean(process.env.AI_API_KEY);
  res.json({ status: 'ok', aiKeyLoaded: hasAiKey });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running safely on http://localhost:${PORT}`);
});