const { checkSchema } = require('express-validator');

const validateAnnonce = async (req, res, next) => {
    const [ validation ] = await checkSchema({
        title: { notEmpty: true }
    }).run(req);
    if(validation.isEmpty()) {
        next();
    }
    console.log("validation :", validation.isEmpty());
    console.log('annonce validated');
    res.status(400).json({
        message: 'le champs title est manquant'
    });
}

module.exports = validateAnnonce;