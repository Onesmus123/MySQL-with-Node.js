//You can combine rows from two or more tables, based on a related column between them, by using a JOIN statement.

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

        const joinData1 = `SELECT adminNames.first_name AS Admin, adminChannels.channel_name AS Channel FROM adminNames LEFT JOIN  adminchannels ON adminNames.first_name = adminchannels.channel_name;`
        connection.query(joinData1, (error, result) => {
            if(error){
                console.log("Failed to join tables.");
                console.log(error.message);
            }else{
                console.log("Tables joined successfully.");
                console.table(result);
            }
        })
    }
});