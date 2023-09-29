const express = require('express');

const publicController = require('../controllers/public');

const router = express.Router();

// GET /feed/posts
router.get('/', publicController.getBio);

module.exports = router;