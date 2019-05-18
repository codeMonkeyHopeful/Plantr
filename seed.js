const { db, Gardener, Vegetable, Plot } = require("./models.js");

db.sync({ force: true })
  .then(() => {
    console.log("Database synced!");
    // db.close() // only if using a version of node without `finally`
    return Promise.all([
      Vegetable.create({
        name: "corn",
        color: "yellow",
        planted_on: "2019-01-01"
      }),
      Vegetable.create({
        name: "squash",
        color: "yellow",
        planted_on: "2019-01-01"
      }),
      Vegetable.create({
        name: "kale",
        color: "yellow",
        planted_on: "2019-01-01"
      }),
      Gardener.create({ name: "test", age: 15 })
    ]);
  })
  .then(gardener => {
    //insert data into the table
  })
  .catch(err => {
    console.log("Disaster! Something went wrong! ");
    console.log(err);
    // db.close() // only if using a version of node without `finally`
  })
  .finally(() => {
    // only if using a version of node WITH `finally`
    db.close();
  });
