const express = require('express');
const db = require('./models/');
const catsRouter = require('./album/album.route');

const app = express();
const port = 8000;

db.sequelize.sync()
  .then(() => {
    console.log('db connection Successful');
  })
  .catch(console.error);

app.use(express.json());
app.use(catsRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});