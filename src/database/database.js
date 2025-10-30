import mysql from "mysql2/promise";
import config from "../config.js";

const connection = mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_name,
    port: config.db_port,
});

const getConnection = () => {
    return connection;
};

export { getConnection };