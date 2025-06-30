const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Get all posts
router.get('/', postController.getAllPosts);

// Get a specific post by ID or slug
router.get('/:idOrSlug', postController.getPostByIdOrSlug);

const { validatePost } = require('../middleware/validation');

router.post('/', validatePost, postController.createPost);
router.put('/:id', validatePost, postController.updatePost);


// Delete a post
router.delete('/:id', postController.deletePost);

module.exports = router;

