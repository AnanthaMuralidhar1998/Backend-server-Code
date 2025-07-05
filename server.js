const express = require('express');
const app = express();
const data = require('./Data.json');
const cors = require('cors');

app.use(cors());


app.get('/recipes', (req, res) => {
  res.json(data);
});

app.listen(3001, () => console.log("Server is running on port 3001"));