// To create a database in MySQL, use the "CREATE DATABASE" statement

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Myonesmus123#"
});

connection.connect(error => {
    if (error) {
        console.log("Unable to connect to database.");
        console.error("Connection Error:", error.message);
        return;
    }

    console.log("Database connection successful.");

    const createDbQuery = `CREATE DATABASE Admins`;

    connection.query(createDbQuery, (error, result) => {
        if (error) {
            console.log("Unable to create the database.");
            console.error("Query Error:", error.message);
        } else {
            console.log("Database created successfully.");
            console.log(result);
        }

        connection.end(); // Always close the connection
    });
});
