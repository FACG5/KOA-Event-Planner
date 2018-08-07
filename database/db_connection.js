const {pool} = require ("pg");
const url = require ("url");
require ("env2")("./config.env");

if (!process.env.DB_URL) throw new Error ("DB_URL must be set");
const params= url.parse(process.env.DB_URL);
const [username, password]= params.auth.split(":");
