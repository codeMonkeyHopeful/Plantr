const Sequelize = require("Sequelize");
const db = new Sequelize("postgres://localhost:5432/plantr");

const Gardener = db.define("gardener", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Plot = db.define("plot", {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  shaded: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

const Vegetable = db.define("vegetable", {
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

Plot.belongsTo(Gardener);
Gardener.hasMany(Plot);

Vegetable.belongsToMany(Plot, { through: "vegetable_plot" });
Plot.belongsToMany(Vegetable, { through: "vegetable_plot" });

Gardener.belongsTo(Vegetable, { as: "favorite_vegetable" });
module.exports = {
  Vegetable,
  Plot,
  Gardener,
  db
};
