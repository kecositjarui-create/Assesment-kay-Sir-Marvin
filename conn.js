const mysql = require('mysql');

const db= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventory'
});

db.connect((err) =>{
    
    if (err) {
        console.log('Error connecting to database!');
        console.log(err);
        return;
    }
    console.log('Connected to database');
});

module.exports = db;