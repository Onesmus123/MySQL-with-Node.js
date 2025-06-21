const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"Admins",
    password:"Myonesmus123#"
});

connection.connect(error => {
    if(error){
        console.log("Failed to connect to the Database.");
        console.log(error.message);
    }else{
        console.log("Database connection is successful.");

        const addForeignKey = `ALTER TABLE adminNames ADD CONSTRAINT FOREIGN KEY (channel_id) REFERENCES adminChannels (channel_id)`;
        connection.query(addForeignKey, (error, result) => {
            if(error){
                console.log("Failed to add the Foreign Key");
                console.log(error.message);
            }else{
                console.log("Foreign Key added successfully.");
                console.log(result);
            }
        });
    }
});