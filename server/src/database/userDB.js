import { Client } from "pg";
import { config } from "dotenv"
config()
const client = new Client({ connectionString: process.env.CONNECTION_URL });

await client.connect().then(() => { console.log("connection successful") }).catch(() => { console.error("Cant connect") })

await client.query(`CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(15) PRIMARY KEY ,
    email VARCHAR(35) NOT NULL UNIQUE ,
    password VARCHAR(60) NOT NULL 
    );`)
export {
    client
}