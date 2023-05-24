const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('chapter3'));
app.use(express.static('chapter4'));

app.use(bodyParser.urlencoded({ extended: false }));

let users = [
  { username: '1', password: '1' },
  { username: '2', password: '2' },
];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chapter3/chapter3.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/chapter4', (req, res) => {
  res.sendFile(__dirname + '/chapter4/chapter4.html');
});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/signup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  users.push({ username, password });
  res.redirect('/login');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});