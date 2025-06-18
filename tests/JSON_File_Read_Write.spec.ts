import { test } from '@playwright/test';
import fs from 'fs';
// Group tests to run serially (in order)
test.describe.serial('Read and Write JSON File', () => {
  // ✅ Test 1: Write data to a JSON file
  test('Write JSON to file', async () => {
    // Step 1: Create a JavaScript object
    const data = {
      username: 'Admin',
      token: 'xyz123',
    };
    // Step 2: Convert the object to a formatted JSON string and save to 'data.json'
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2)); 
    // 'null' means no filtering of keys
    // '2' means indentation of 2 spaces for readability
  });
  // ✅ Test 2: Read data from the JSON file
  test('Read JSON from file', async () => {
    // Step 1: Read the contents of 'data.json' as a UTF-8 string
    const rawData = fs.readFileSync('data.json', 'utf-8');
    // Step 2: Parse the JSON string into a JavaScript object
    const jsonData = JSON.parse(rawData);
    // Step 3: Use the parsed data — log the username to the console
    console.log(jsonData.username); // Should print: Admin
  });
});
