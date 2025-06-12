const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"Admins",
    password:"Myonesmus123#"
});

connection.connect(error => {
    if(error){
        console.log("Failed to connect to the database");
        console.log(error.message);
    }else{
        console.log("Successfully connected to the database.");

        // The WHERE clause specifies which record or records that should be updated. 
        // If you omit the WHERE clause, all records will be updated!
        const updateData = `UPDATE adminnames SET first_name = "John", last_name = "Iluka" WHERE admin_id = 5480`

        connection.query(updateData, (error,result) => {
            if(error){
                console.log("Failed to update record.");
                console.log(error.message);
            }else{
                console.log("Record updated successfully.");
                console.table(result);
            }

            connection.end(error => {
                if(error){
                    console.log("Failed to end connection.");
                }else{
                    console.log("Connection ended successfully.");
                }
            });
        });
    }
});