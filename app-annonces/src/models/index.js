const Sequelize = require('sequelize');

const dbInstance = new Sequelize(`mariadb://${process.env.MARIADB_USERNAME}:${process.env.MARIADB_PASSWORD}@${process.env.MARIADB_HOST}:${process.env.MARIADB_PORT}/${process.env.MARIADB_DATABASE}`)

// instanciation des différents modèles.

module.exports = {
    Sequelize,
    dbInstance
}