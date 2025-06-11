// To fill a table in MySQL, use the "INSERT INTO" statement

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"Admins",
    password:"Myonesmus123#"
});

connection.connect(error => {
    if(error){
        console.log("Unable to connect to the database.");
        console.log(error.message);
    }else{
        console.log("Database connection is successful.");

        const queryData = `INSERT INTO adminNames VALUES (5616, 'Evan Mutua', 'Ngei');`
        connection.query(queryData, (error, result) => {
            if(error){
                console.log("Unable to insert data into the table");
                console.log(error.message);
            }else{
                console.log("Data inserted successfully.");
                console.table(result);
            }
            connection.end();
        });
    }
});