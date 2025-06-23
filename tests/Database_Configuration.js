// db.js
import mysql from 'mysql2/promise';
let connection;
export default async function getConnection() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'mahesh',
    });
    console.log('✅ MySQL connected');
  }
  return connection;
}
