'use strict';
const bcrypt = require('bcryptjs');
require('dotenv').config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashpassword = await bcrypt.hash("MotDePasse123", parseInt(process.env.SALT));
    await queryInterface.bulkInsert('Users', [{
      firstname: "Soufian",
      lastname: "AIT TIRITE",
      username: "contact@soufian-a.net",
      password: hashpassword,
      role: 'admin'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users',{ username: "contact@soufian-a.net" });
  }
};
