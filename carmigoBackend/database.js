const poollConfig = {
    connectionLimit: 10,
    password: 'm35eyckA33',
    user: 'sql5443582',
    database: 'sql5443582',
    host: 'sql5.freemysqlhosting.net',
    port: '3306'
}


function createDatabaseConnection(config, sql){
    let connection = sql.createPool(config);
    return connection;
    
}

let db = {
    createDBPool: createDatabaseConnection,
    dbDetails: poollConfig,
    getVehicles: 'select * from vehicles',
    postVehicles: "INSERT INTO `vehicles` (`id`, `year`, `make`, `model`, `color`) VALUES (NULL, '2022', 'chevrolet', 'traverse', 'white');"
}

export default db;
