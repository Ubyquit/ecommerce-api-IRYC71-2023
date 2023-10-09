const  mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host:"mysql-ahophp.alwaysdata.net",
    user:"ahophp_iriy",
    password:"Holamundo",
    database:"ahophp_iriy",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;