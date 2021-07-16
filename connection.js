const mysql = require('mysql');
const connection = mysql.createConnection({
    user: 'root',
    password: 'Mohammad@#$test.com',
    database: 'todos_db',
    host: 'localhost',
    multipleStatements: true
});
connection.connect((err)=>
{
    if (err) { 
        console.log('connection failed');
        
    }else{
        connection.query('CREATE DATABASE IF NOT EXISTS todos_db', (err) => {
            if (err) {
                console.log(err)
            }else{
                connection.query("CREATE TABLE `todos` (`id` int NOT NULL AUTO_INCREMENT,  `name` varchar(45) NOT NULL, `status` int DEFAULT NULL, `userid` int DEFAULT NULL,  PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;",()=>{})
                connection.query("CREATE TABLE `users` (  `id` int NOT NULL AUTO_INCREMENT,  `name` varchar(45) NOT NULL,  PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;", ()=>{})
                connection.query("INSERT INTO users (name) VALUES ('mohammad')")
            }
        })
    }
})

module.exports = connection;