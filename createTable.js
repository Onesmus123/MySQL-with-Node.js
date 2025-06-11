// To create a table in MySQL, use the "CREATE TABLE" statement.
// Make sure you define the name of the database when you create the connection
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Myonesmus123#",
    database: "Admins"
});

connection.connect(error => {
    if (error) {
        console.log("Unable to connect to the database.");
        console.log(error.message);
        return;
    }

    console.log("Database connection is successful.");

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS adminNames (
            admin_id INT PRIMARY KEY,
            full_name VARCHAR(20),
            age INT,
            address VARCHAR(20)
        )
    `;

    connection.query(createTableQuery, (error, result) => {
        if (error) {
            console.log("Unable to create Table");
            console.log(error.message);
        } else {
            console.log("Table created successfully.");
            console.log(result);
        }

        connection.end();
    });
});
