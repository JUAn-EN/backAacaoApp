import mysql from 'mysql';

const database = mysql.createConnection({
    host:"144.91.101.178",
    user:"cacaoapp",
    password: "Cacaoapp1234x",
    database:"cacaoapp"
});
//Servidor:144.91.101.178
//base de datos:cacaoapp
//Usuario:cacaoapp
//Contraseña:Cacaoapp1234x
//puerto:3306

export default database;