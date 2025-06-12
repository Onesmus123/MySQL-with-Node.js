// When selecting records from a table, you filter the selection by using the "WHERE" statement:

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

        // Filter the selection WHERE last_name = "Musee"
        const selectData1 = `SELECT * FROM adminnames WHERE last_name = ?` // Using placeholders to prevent SQL injection

        connection.query(selectData1, ["Musee"], (error, result) => {
            if(error){
                console.log("Unable to select from the database.");
                console.log(error.message);
            }else{
                console.log("Selection using lastName = Musee is successful.");
                console.log(result);
            }
        });

        // You can also select records that start with, include, or end with a given letter or phrase.
        const selectData2 = `SELECT * FROM adminnames WHERE first_name LIKE ?`
        connection.query(selectData2,["O%"], (error, result) => {
            if(error){
                console.log("Unable to select from the database.");
                console.log(error.message);
            }else{
                console.log("Selection of first_name starting with `O` is successful.");
                console.table(result);
            }
            connection.end(error =>{
                if(error){
                    console.log("Unable to end connection. " + error.message);
                }else{
                    console.log("Connection ended successfully.")
                }
            });
        });
    }
});