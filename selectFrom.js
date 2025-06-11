// To select data from a table in MySQL, use the "SELECT" statement

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
        console.log("Database connection successful");

        //SELECT * will return all columns
        const selectData1 = `SELECT * FROM adminNames`

        connection.query(selectData1, (error, result) => {
            if(error){
                console.log("Failed to select from the database");
                console.log(error.message);
            }else{
                console.log("Selection is successful ...");
                console.table(result);
            }
        });

        // Select admin_id and last_name columns ONLY
        const selectData2 = `SELECT admin_id, last_name FROM adminNames`

        connection.query(selectData2, (error, result) => {
            if(error){
                console.log("Unable to select from database.");
                console.log(error.message);
            }else{
                console.log("Database selected successfully.");
                console.log(result);
            }
        });
        
        // The result object is an array containing each row as an object.
        // So, we can access a specific value using the array index

        const selectData3 = `SELECT first_name from adminNames`
        connection.query(selectData3, (error, result, fields) => { // The third parameter of the callback function is an array containing information about each field in the result.
            if(error){
                console.log("Unable to select from database");
                console.log(error.message);
            }else{
                console.log("Selection from database is successful");
                console.log(result[2].first_name);

                //Select all records from the "adminNames" table, and display the fields object
                console.log(fields)
            }
            connection.end();
        });
    }
});