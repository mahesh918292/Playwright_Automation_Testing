import { test } from '@playwright/test';
import getConnection from './Database_Configuration';

test('Database Testing', async () => {
  const con = await getConnection();

  // Select all courses
  const [rows] = await con.execute('SELECT * FROM courses');
  console.log(rows);
  /* Example output:
  [
    { cid: 101, id: 1, cname: 'Math' },
    { cid: 102, id: 1, cname: 'Science' },
    { cid: 103, id: 2, cname: 'History' }
  ]
  */

  // Update cname for cid=101
  const [updateResult] = await con.execute('UPDATE courses SET cname = ? WHERE cid = ?', ['Maths', 101]);
  console.log(updateResult); // shows affectedRows, etc.

  // Verify update
  const [updatedRows] = await con.execute('SELECT * FROM courses WHERE cid = ?', [101]);
  console.log(updatedRows); // [ { cid: 101, id: 1, cname: 'Maths' } ]

  // Insert new course
  const [insertResult] = await con.execute(
    'INSERT INTO courses (cid, id, cname) VALUES (?, ?, ?)',
    [104, 2, 'History']
  );
  console.log(insertResult); // info about insertId, affectedRows, etc.

  // Delete courses with cid 102 and 103
  const [deleteResult] = await con.execute(
    'DELETE FROM courses WHERE cid IN (?, ?)',
    [102, 103]
  );
  console.log(deleteResult); // info about affectedRows

});
