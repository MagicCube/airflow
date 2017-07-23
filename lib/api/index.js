const express = require('express');

const router = express.Router();
router.use('/download', require('./download'));

module.exports = router;
