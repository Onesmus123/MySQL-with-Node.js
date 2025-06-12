// You can delete an existing table by using the "DROP TABLE" statement

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"Admins",
    password:"Myonesmus123#"
});

connection.connect(error => {
    if(error){
        console.log("Failed to connect to the database.");
        console.log(error.message);
    }else{
        console.log("Database connection successful.");

        //If the the table you want to delete is already deleted, or for any other reason does not exist, you can use the IF EXISTS keyword to avoid getting an error.
        const dropTable = `DROP TABLE IF EXISTS adminnamess`;

        connection.query(dropTable, (error,result) => {
            if(error){
                console.log("Failed to delete table.");
                console.log(error.message);
            }else{
                console.log("Table deleted successfully.");
                console.table(result);
            }
            connection.end(error =>{
                if(error){
                    console.log("Failed to end connection");
                    console.log(error.message);
                }else{
                    console.log("Connection ended successfully.")
                }
            })
        });
    }
});