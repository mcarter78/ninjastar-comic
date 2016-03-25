var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComicSchema = new Schema({
  title: String,
  date: String,
  image: String
});

var Comic = mongoose.model('Comic', ComicSchema);

module.exports = Comic;
