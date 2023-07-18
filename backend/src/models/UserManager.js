const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByPseudo(pseudo) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE pseudo = ?`, [
      pseudo,
    ]);
  }
}

module.exports = UserManager;
