const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;


app.use(express.json());

app.use(['/_healthz', '/_readyz'], (req, res) => {
  res.send({ok: "ok"});
});

app.use(express.static(path.join(__dirname, 'dist')));



// Handle all routes and return 'index.html' for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
