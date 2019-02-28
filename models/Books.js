var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Book = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

var Book = mongoose.model("Book", ArticleSchema);

module.exports = Book;
