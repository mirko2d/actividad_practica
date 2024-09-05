import mysql from 'mysql2/promise';

let connection;

try{
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'db_system'
    });

    console.log('se conecto la base de datos correctamente');
}catch(error) {
    console.log(error);
    process.exit(1);
}

export {connection};