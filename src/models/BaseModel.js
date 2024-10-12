const mongoose = require('mongoose');

const baseSchema = new mongoose.Schema(
  {
    is_active: {
      type: Boolean,
      default: true,
    },
    update_at: {
      type: Date,
      default: Date.now,
    },
    create_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: { createdAt: 'create_at', updatedAt: 'update_at' } }
);

module.exports = baseSchema;
