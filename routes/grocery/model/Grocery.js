const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
  grocery: {
    type: String,
  },

  purchased: {
    type: Boolean,
    default: false,
  },

  dateAdded: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("grocery", grocerySchema);
