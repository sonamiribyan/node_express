// db.js

import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

class Database {
  constructor() {
    this.sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      String(process.env.DB_PASSWORD),
      {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
      }
    );
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Database();
    }
    return this.instance;
  }
}

// Export the instance of Sequelize
const sequilze =Database.getInstance().sequelize;

export default sequilze;
