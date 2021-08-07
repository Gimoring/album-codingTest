const express = require('express');
const catsRouter = require('./album/album.route');

const app = express();
const port = 8000;

app.use(express.json());
app.use(catsRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});