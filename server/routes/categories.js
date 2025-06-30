const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Get all categories
router.get('/', categoryController.getAllCategories);

const { validateCategory } = require('../middleware/validation');

router.post('/', validateCategory, categoryController.createCategory);


module.exports = router;

