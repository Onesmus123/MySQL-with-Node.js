// To install the "mysql" module, execute the following command: npm install mysql
//Node.js can use this module to manipulate the MySQL database

const mysql = require('mysql2'); //I have used mysql2 module because it supports the caching_sha2_password method (npm install mysql2)

// configurations for creating mysql connection
const connection = mysql.createConnection({
    host: 'localhost',     // host for connection
    port: 3306,            // default port for mysql is 3306
    password:"Myonesmus123#", // password of the mysql connection
    user:"root" // username of the mysql connection
});

// executing connection
connection.connect((error) => {
    if(error){
        console.log("Unable to connect to the database!");
        console.log(error);
    }else{
        console.log("Database connection is successful.");
        //Query method takes an sql statements as a parameter and returns the result
        connection.query(`SHOW DATABASES`, (error, result) => {
            if(error){
                console.log("Unable to fetch databases.");
                console.error(error.message);
            }else{
                console.log("Available Databases:");
                console.table(result); // Formats output as a table
            }
            connection.end();
        });
    }
});