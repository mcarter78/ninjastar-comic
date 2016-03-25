var Comic = require('../models/comic');

var comicsController = {
  index: function(req, res) {
    console.log('index called');
    Comic.find({}, function(err, allComics) {
      if (err) console.log(err);
      res.json(allComics);
    });
  }
};

module.exports = comicsController;
