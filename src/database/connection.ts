import { knex, Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const config: Knex.Config = {
  client: "mysql2",
  connection: process.env.DB_CONNECTION,
};

const connection = knex(config);

export { config };
export default connection;
