import mongoose from "mongoose";
require('dotenv').config()

const DBSTRING = process.env.DBCONNECTSTRING;

mongoose.connect(`${DBSTRING}`);

let db = mongoose.connection;

export default db;