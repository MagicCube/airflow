const express = require('express');

const downloadService = require('../services/download');

const router = express.Router();
router.get('/task', (req, res) => {
  const filter = req.query.filter;
  const tasks = downloadService.getTasks(filter);
  res.send(tasks);
});

module.exports = router;
