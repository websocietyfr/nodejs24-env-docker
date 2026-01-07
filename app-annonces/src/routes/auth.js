const express = require('express');
const router = express.Router();
const { dbInstance, User } = require("../models");
const bcrypt = require('bcrypt');
require('dotenv').config();


router.post('/register', async (req, res) => {
    const transaction = await dbInstance.transaction();
    try{
        const { firstname, lastname, profil_picture, phone_number, address, zip_code, city, username, password } = req.body;
        const hashedpassword = await bcrypt.hash(password,process.env.SALT);
        const user = await User.create({
            firstname,
            lastname,
            username,
            profil_picture,
            phone_number,
            address,
            zip_code,
            city,
            password: hashedpassword
        }, { transaction });

        transaction.commit();
        return res.status(201).json({
            message: 'Utilisateur créer avec succès',
            user
        })
    } catch(error) {
        transaction.rollback();
        const errormsg = (error.name === 'SequelizeDatabaseError') ? error.parent.sqlMessage : error;
        return res.status(400).json({
            message: "Erreur lors de la création de l'utilisateur",
            error: errormsg
        })
    }
})

module.exports = router;
