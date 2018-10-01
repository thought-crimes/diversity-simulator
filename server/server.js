const express = require('express');
const ssr = require('./ssr');

const server = express();

server.use(express.static('public'));
server.set('view engine', 'ejs');

server.get('/', async (req, res) => {
  const { initialMarkup, initialData } = await ssr();
  res.render('index', { initialMarkup, initialData });
});

server.listen(process.env.PORT || 5000, () => {
  console.info('Server is running...');
});
