// You can delete records from an existing table by using the "DELETE FROM" statement.

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"Admins",
    password:"Myonesmus123#"
});

connection.connect(error =>{
    if(error){
        console.log("Unable to connect to the database.");
        console.log(error.message);
    }else{
        console.log("Connection to the database is successful.")
    }
});

const deleteData = `DELETE FROM adminnames WHERE last_name = "Makadara"`;
connection.query(deleteData, (error, result) =>{
    if(error){
        console.log("Unable to delete record from database.");
        console.log(error.message);
    }else{
        console.log("Record deleted successfully.");
        console.log("Number of deleted records: " + result.affectedRows);
    }
});