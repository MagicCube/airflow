const express = require('express');

const downloadService = require('../services/download');

const router = express.Router();

router.get('/task', (req, res) => {
  const filter = req.query.filter;
  try {
    const tasks = downloadService.getTasks(filter);
    res.send(tasks);
  } catch (error) {
    res.status(501).send({
      error
    });
  }
});

router.post('/task', async (req, res) => {
  const task = req.body.task;
  try {
    const newTask = await downloadService.createTask(task);
    res.send(newTask);
  } catch (error) {
    res.status(501).send({
      error
    });
  }
});

module.exports = router;
