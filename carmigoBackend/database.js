
import mysql from 'mysql';


const databaseDetails = {
    server: "sql5.freemysqlhosting.net",
    name: "sql5443582",
    username: "sql5443582",
    password: "m35eyckA33",
    portNumber: 3306
}

// var connection = mysql.createConnection({
//     host: 'sql5.freemysqlhosting.net',
//     user: 'sql5443582',
//     password: 'm35eyckA33',
//     database: 'sql5443582'
//   });

// INSERT INTO `vehicles` (`id`, `year`, `make`, `model`, `color`) VALUES ('1', '2016', 'chevrolet', 'impala', 'burgundy');
//creates connection to database and returns it. 
function createDatabaseConnection(dbObj){
    let connection = mysql.createConnection({
        host: dbObj.host,
        user: dbObj.username,
        password: dbObj.password,
        database: dbObj.name
    });
    if(connection != null){
        return connection
    }else {
        return "failed connection";
    }
}

let db = {
    createDB: createDatabaseConnection,
    dbDetails: databaseDetails,
    getVehicles: 'select * from vehicles'
}

export default db;
// Server: sql5.freemysqlhosting.net
// Name: sql5443582
// Username: sql5443582
// Password: m35eyckA33
// Port number: 3306

// (year, make, model, color)

// CREATE TABLE `sql5443582`.`vehicless` ( `id` INT(255) NOT NULL , `year` YEAR(50) NOT NULL , `make` VARCHAR(50) NOT NULL , `model` VARCHAR(50) NOT NULL , `color` VARCHAR(50) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;