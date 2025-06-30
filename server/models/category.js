// Category.js - Mongoose model for blog categories

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a category name'],
      unique: true,
      trim: true,
      maxlength: [100, 'Category name cannot exceed 100 characters'],
    },
    description: {
      type: String,
      maxlength: [300, 'Description cannot exceed 300 characters'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);



