const { Annonce } = require('../models');

module.exports = {
    getAllAnnonces,
    getAnnonce
};

async function getAllAnnonces(req, res) {
    const annonces = await Annonce.findAll();
    res.status(200).json({
        message: 'Mes annonces',
        annonces
    });
}

function getAnnonce(req, res) {
    // req.params.id
    console.log('id :', req.params.id);
    res.status(200).json({
        message: 'Mon annonce',
        id: req.params.id
    });
}
