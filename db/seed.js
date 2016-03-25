var mongoose = require('mongoose');
var Comic = require('../api/models/comic');
mongoose.connect('mongodb://heroku_4t7wf0ql:dim63brs292l6irb85kfs6sd2i@ds025419.mlab.com:25419/heroku_4t7wf0ql');

comics = [
    {
        title: "The Summons IV",
        date : "03.22.2013",
        image : "img/2013-03-22.jpg"
    },
    {
        title: "A Trombone Interlude",
        date : "03.15.2013",
        image : "img/2013-03-15.jpg"
    },
    {
        title: "The Summons III",
        date : "03.08.2013",
        image : "img/2013-03-08.jpg"
    },
    {
        title: "The Summons II",
        date : "03.01.2013",
        image : "img/2013-03-01.jpg"
    },
    {
        title: "The Summons I",
        date : "02.22.2013",
        image : "img/2013-02-22.jpg"
    },
    {
        title: "Breaking WoW Edge",
        date : "02.15.2013",
        image : "img/2013-02-15.jpg"
    },
    {
        title: "Pirated Pets V",
        date : "02.08.2013",
        image : "img/2013-02-08.jpg"
    },
    {
        title: "Pirated Pets IV",
        date : "02.01.2013",
        image : "img/2013-02-01.jpg"
    },
    {
        title: "Pirated Pets III",
        date : "01.25.2013",
        image : "img/2013-01-25.jpg"
    },
    {
        title: "Pirated Pets II",
        date : "01.18.2013",
        image : "img/2013-01-18.jpg"
    },
    {
        title: "Pirated Pets I",
        date : "01.11.2013",
        image : "img/2013-01-11.jpg"
    },
    {
        title: "Smiley's Correspondence",
        date : "01.04.2013",
        image : "img/2013-01-04.jpg"
    },
    {
        title: "Apocalypse Nigh",
        date : "12.28.2012",
        image : "img/2012-12-28.jpg"
    },
    {
        title: "'Twas the Night Before Ninja Christmas",
        date : "12.21.2012",
        image : "img/2012-12-21.jpg"
    },
    {
        title: "Holiday Shopping with Kage III - Sneaking a Peek",
        date : "12.14.2012",
        image : "img/2012-12-14.jpg"
    },
    {
        title: "Holiday Shopping with Kage II - Ninja Looter",
        date : "12.07.2012",
        image : "img/2012-12-07.jpg"
    },
    {
        title: "Holiday Shopping with Kage I - Frontsies",
        date : "11.30.2012",
        image : "img/2012-11-30.jpg"
    },
    {
        title: "Thanksgiving 2012",
        date : "11.23.2012",
        image : "img/2012-11-23.jpg"
    },
    {
        title: "Spacey Battles",
        date : "11.16.2012",
        image : "img/2012-11-16.jpg"
    },
    {
        title: "Shadow on the Sun V - A Special Moment",
        date : "11.09.2012",
        image : "img/2012-11-09.jpg"
    },
    {
        title: "Halloween 2012",
        date : "10.30.2012",
        image : "img/2012-10-30.jpg"
    },
    {
        title: "Shadow on the Sun IV - Mint Condition",
        date : "10.26.2012",
        image : "img/2012-10-26.jpg"
    },
    {
        title: "Shadow on the Sun III - Emblematic Envy",
        date : "10.19.2012",
        image : "img/2012-10-19.jpg"
    },
    {
        title: "Shadow on the Sun II - Concerns",
        date : "10.13.2012",
        image : "img/2012-10-13.jpg"
    },
    {
        title: "Shadow on the Sun I - Crossplay",
        date : "10.05.2012",
        image : "img/2012-10-05.jpg"
    },
    {
        title: "A Day at the Beach X",
        date : "09.28.2012",
        image : "img/2012-09-28.jpg"
    },
    {
        title: "A Day at the Beach IX",
        date : "09.21.2012",
        image : "img/2012-09-21.jpg"
    },
    {
        title: "A Day at the Beach VIII",
        date : "09.14.2012",
        image : "img/2012-09-14.jpg"
    },
    {
        title: "A Day at the Beach VII",
        date : "09.06.2012",
        image : "img/2012-09-06.jpg"
    },
    {
        title: "A Day at the Beach VI",
        date : "08.31.2012",
        image : "img/2012-08-31.jpg"
    },
    {
        title: "A Day at the Beach V",
        date : "08.25.2012",
        image : "img/2012-08-25.jpg"
    },
    {
        title: "A Day at the Beach IV",
        date : "08.16.2012",
        image : "img/2012-08-16.jpg"
    },
    {
        title: "A Day at the Beach III",
        date : "08.05.2012",
        image : "img/2012-08-05.jpg"
    },
    {
        title: "A Day at the Beach II",
        date : "04.21.2012",
        image : "img/2012-04-21.jpg"
    },
    {
        title: "A Day at the Beach I",
        date : "03.31.2012",
        image : "img/2012-03-31.jpg"
    },
    {
        title: "A Matter of Skill",
        date : "02.28.2012",
        image : "img/2012-02-28.jpg"
    },
    {
        title: "Post-Dragonicide Clean-Up",
        date : "02.04.2012",
        image : "img/2012-02-04.jpg"
    },
    {
        title: "Happy Holidays 2011",
        date : "12.25.2011",
        image : "img/2011-12-25.jpg"
    },
    {
        title: "Dovahkage",
        date : "12.11.2011",
        image : "img/2011-12-11.jpg"
    },
    {
        title: "The Source (Part II) - Delicious, Delicious Guilt",
        date : "10.08.2011",
        image : "img/2011-10-08.jpg"
    },
    {
        title: "The Source",
        date : "09.21.2011",
        image : "img/2011-09-21.jpg"
    },
];

Comic.remove({}, function(err){
  if (err) return console.log(err);
  Comic.create(comics, function(err, data){
    if (err) return console.log(err);
    console.log("created", comics.length, "comics");
    mongoose.connection.close();
  });
});
