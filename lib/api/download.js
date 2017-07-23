const express = require('express');

const downloadService = require('../services/download');

const router = express.Router();
router.get('/task', (req, res) => {
  const tasks = downloadService.getTasks();
  res.send(tasks);
});

module.exports = router;
