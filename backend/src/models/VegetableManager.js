const AbstractManager = require("./AbstractManager");

class VegetableManager extends AbstractManager {
  constructor() {
    super({ table: "vegetable" });
  }

  insert(vege) {
    return this.database.query(
      `insert into ${this.table} (vegetable, variety, price, comments, picture, isAvailable) values (?, ?, ?, ?, ?, ?)`,
      [
        vege.vegetable,
        vege.variety,
        vege.price,
        vege.comments,
        vege.picture,
        vege.isAvailable,
      ]
    );
  }

  update(vege) {
    return this.database.query(
      `update ${this.table} set vegetable = ?, variety = ?, price = ?, comments = ?, picture = ?, isAvailable = ? where id = ?`,
      [
        vege.vegetable,
        vege.variety,
        vege.price,
        vege.comments,
        vege.picture,
        vege.isAvailable,
        vege.id,
      ]
    );
  }
}

module.exports = VegetableManager;
