"use strict";

var express = require('express');

var router = express.Router();

var checkAuth = require("../middleware/check-auth");

var tracks = [{
  title: "Anxiety - Intro",
  artist: "Juice WRLD"
}, {
  title: "Conversations",
  artist: "Juice WRLD"
}, {
  title: "Titanic",
  artist: "Juice WRLD"
}, {
  title: "Bad Energy",
  artist: "Juice WRLD"
}, {
  title: "Righteous",
  artist: "Juice WRLD"
}, {
  title: "Blood On My Jeans",
  artist: "Juice WRLD"
}, {
  title: "Smile",
  artist: "Juice WRLD, The Weeknd"
}, {
  title: "Tell Me U Luv Me",
  artist: "Juice WRLD, Trippie Redd"
}, {
  title: "Hate The Other Side",
  artist: "Juice WRLD, Marshmello, The Kid Laroi, Polo G"
}, {
  title: "Get Through It - Interlude",
  artist: "Juice WRLD"
}, {
  title: "Life's A Mess",
  artist: "Juice WRLD, Halsey"
}, {
  title: "Come & Go",
  artist: "Juice WRLD, Marshmello"
}, {
  title: "I Want It",
  artist: "Juice WRLD"
}, {
  title: "Fighting Demons",
  artist: "Juice WRLD"
}, {
  title: "Wishing Well",
  artist: "Juice WRLD"
}, {
  title: "Screw Juice",
  artist: "Juice WRLD"
}, {
  title: "Up Up And Away",
  artist: "Juice WRLD"
}, {
  title: "The Man, The Myth, The Legend - Interlude",
  artist: "Juice WRLD"
}, {
  title: "Stay High",
  artist: "Juice WRLD"
}, {
  title: "Can't Die",
  artist: "Juice WRLD"
}, {
  title: "Man Of The Year",
  artist: "Juice WRLD"
}, {
  title: "Juice WRLD Speaks From Heaven - Outro",
  artist: "Juice WRLD"
}]; //test route

router.get('/test', checkAuth, function (req, res, next) {
  res.status(200).json({
    data: tracks
  });
});
router.get('/', function (req, res, next) {
  res.status(200).json({
    message: "handling get requests at /tracks"
  });
});
router.get('/:trackId', function (req, res, next) {
  var trackId = req.params.trackId;
  res.status(200).json({
    message: "handling the id at /tracks",
    id: trackId
  });
});
module.exports = router;