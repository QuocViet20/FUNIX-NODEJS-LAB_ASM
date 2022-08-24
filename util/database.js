const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Quocviet20", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
