const express = require('express');
const router = express.Router();
const { validateAnnonce } = require('../middlewares/annonces');
const { deleteAnnonce, getAnnonceById, createAnnonce, searchAnnonce, updateAnnonce } = require('../services/annonces');

router.get('/', searchAnnonce);

router.get('/all', (req, res, next) => {
    res.status(200).send();
});

router.get('/:id', getAnnonceById);

router.post('/', validateAnnonce, createAnnonce);

router.put('/:id', updateAnnonce);

router.delete('/:id', deleteAnnonce);

module.exports = router;