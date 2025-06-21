const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"Admins",
    password:"Myonesmus123#"
});

connection.connect(error => {
    if(error){
        console.log("Failed to connect to Database.");
        console.log(error.message);
    }else{
        console.log("Successfully connected to the database.");

        const addColumn = `ALTER TABLE adminNames ADD COLUMN channel_id INT`;
        connection.query(addColumn, (error, result) => {
            if(error){
                console.log("Unable to add new column.");
                console.log(error.message);
            }else{
                console.log("New column added successfully.");
                console.log(result);
            }
        });
    }
});