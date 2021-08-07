const express = require('express');
const router = express.Router();

const albumService = require('./album.service');

router.get('/', albumService.readAllAlbum);

router.get('/:id', albumService.readAlbum);

module.exports = router;