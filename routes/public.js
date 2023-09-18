const express = require('express');

const publicController = require('../controllers/public');

const router = express.Router();

// GET /feed/posts
router.post('/scramble', publicController.getScrambled);

module.exports = router;