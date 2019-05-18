const Sequelize = require("Sequelize");
const db = new Sequelize("postgres://localhost:5432/plantr");

const gardener = db.define("gardener", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const plot = db.define("plot", {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  shaded: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

const vegetable = db.define("vegetable", {
  name: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  planted_on: {
    type: Sequelize.DATE
  }
});

module.exports = db;
