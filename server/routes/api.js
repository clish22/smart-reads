//api routes
var express = require('express');
var router = express.Router();
var path = require('path');
var apiController = require('../controllers/apiController');

router.get('/api', apiController.api);

router.get('/api/notes', apiController.getNotes);

router.post('/api/notes', apiController.postNote);

router.delete('/api/notes/:id', apiController.deleteNote);

router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
