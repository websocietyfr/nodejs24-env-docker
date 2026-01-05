const express = require('express');
const router = express.Router();
const validateAnnonce = require('../middlewares/validateAnnonce');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Liste des annonces'
    });
});

router.post('/', validateAnnonce, (req, res, next) => {
    res.status(201).json({
        message: "success"
    });
});

module.exports = router;