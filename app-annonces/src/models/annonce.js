const { Model, DataTypes } = require('sequelize');

const Annonce = (sequelize, DataTypes) => {
    class Annonce extends Model {
        // implementation des jointures
        static associate(models) {}
    }
    
    Annonce.init({
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.FLOAT,
        filepath: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Annonce'
    });

    return Annonce;
}

module.exports = Annonce;