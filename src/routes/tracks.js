const express = require('express');
const router = express.Router();

const models = require('models/index');

router.get('/', (req, res, next) => {
    models.Track.findAll()
        .then(tracks => {
            res.status(200).json({
                data: tracks
            })
        })
        .catch(err => console.log(err));
});

router.get('/:trackId', (req, res, next) => {
    const trackId = req.params.trackId;

    res.status(200).json({
        message: "handling the id at /tracks",
        id: trackId
    });
});

module.exports = router;