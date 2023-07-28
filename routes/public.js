const express = require('express');

const publicController = require('../controllers/public');

const router = express.Router();

// GET /feed/posts
router.get('/', publicController.getBio);
router.get('/:num', publicController.getBios);

module.exports = router;