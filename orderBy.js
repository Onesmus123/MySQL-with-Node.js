// ORDER BY statement to sort the result in ascending or descending order.

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"Admins",
    password:"Myonesmus123#"
});

connection.connect(error => {
    if(error){
        console.log("Unable to connect to the database");
        console.log(error.message);
    }else{
        console.log("Database connection is successful.");

        // The ORDER BY keyword sorts the result ascending by default.
        const orderData1 = `SELECT first_name, last_name FROM adminnames ORDER BY first_name`;

        connection.query(orderData1, (error, result) => {
            if(error){
                console.log("Unable to Select/Order the data.");
                console.log(error.message);
            }else{
                console.log("Data Ordered in Ascending Order successfully.");
                console.table(result);
            }
        });

        // To sort the result in descending order, use the DESC keyword.
        const orderData2 = `SELECT first_name, last_name FROM adminnames ORDER BY first_name DESC`;

        connection.query(orderData2, (error, result) => {
            if(error){
                console.log("Unable to Order data in Descending Order!");
                console.log(error.message);
            }else{
                console.log("Data Ordered in Descending Order successfully.");
                console.table(result);
            }
            connection.end(error =>{
                if(error){
                    console.log("Unable to close connection." + error.message);
                }else{
                    console.log("Connection closed successfully!")
                }
            });
        });
    }
});