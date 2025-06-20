const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "Admins",
    password: "Myonesmus123#"
});

connection.connect(error => {
    if (error) {
        console.log("Failed to connect to Database.");
        console.log(error.message);
    } else {
        console.log("Successfully connected to the database.");

        const addConstraintQuery = `
            ALTER TABLE adminNames 
            ADD CONSTRAINT uq_admin_id UNIQUE (admin_id)
        `;

        connection.query(addConstraintQuery, (error, result) => {
            if (error) {
                console.log("Failed to add constraint.");
                console.log(error.message);
            } else {
                console.log("Constraint added successfully.");
                console.log(result);
            }
            connection.end(); // Close the connection
        });
    }
});
