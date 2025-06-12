// You can limit the number of records returned from the query, by using the "LIMIT" statement

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
        console.log("Database connection successful.");

        //Select the 4 first records in the table
        const limitData1 = `SELECT * FROM adminnames LIMIT 4`;

        connection.query(limitData1, (error,result) => {
            if(error){
                console.log("Failed to return data (LIMIT 4).");
                console.log(error.message);
            }else{
                console.log("Limit returned successfully.");
                console.table(result);
            }
        });

        // Return 4 records, starting from the second record, using "OFFSET" keyword
        const limitData2 = `SELECT * FROM adminnames LIMIT 4 OFFSET 1`;

        connection.query(limitData2, (error, result) => {
            if(error){
                console.log("Failed to return data.");
                console.log(error.message);
            }else{
                console.log("LIMIT data returned successfully: (LIMIT 4 OFFSET 1)");
                console.table(result);
            }
        });

        // Shorter Syntax: LIMIT 1, 4 returns the same as the offset example above
        const limitData3 = `SELECT * FROM adminnames LIMIT 1, 4`;

        connection.query(limitData3, (error, result) => {
            if(error){
                console.log("Failed to return data.");
                console.log(error.message);
            }else{
                console.log("LIMIT data returned successfully: (LIMIT 1, 4)");
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