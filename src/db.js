import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: "localhost",
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

pool 
.connect()
.then(() => {
    console.log("Connected to the database");
    })

    .catch((err) => {
        console.error("Error connecting to the database", err)
    });

    export default pool;