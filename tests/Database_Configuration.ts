// db.js
import mysql from 'mysql2/promise';
let connection;
export default async function getConnection() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'your_user_name',
      password: 'your_password',
      database: 'your_database_name',
    });
    console.log('✅ MySQL connected');
  }
  return connection;
}
