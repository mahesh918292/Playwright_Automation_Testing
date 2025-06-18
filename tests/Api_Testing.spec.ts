// Import Playwright's test and expect tools
import { test, expect } from '@playwright/test';

// Define a test for both GET and POST requests
test('GET and POST API test using test.step', async ({ request }) => {

  // ✅ STEP 1: GET request to fetch a post
  await test.step('GET post with ID 1', async () => {
    // Send a GET request to fetch post with ID 1
    const response1 = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    // Check that the response status is OK (200-299)
    expect(response1.ok()).toBeTruthy();

    // Parse the response JSON
    const data = await response1.json();
    console.log('GET Response:', data);

    // Assert that the JSON includes property `id` with value 1
    expect(data).toHaveProperty('id', 1);
  });

  // ✅ STEP 2: POST request to create a new post
  await test.step('POST new post data', async () => {
    // Send a POST request with title, body, and userId
    const response2 = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'foo',
        body: 'bar',
        userId: 1
      }
    });

    // Check that the response status is 201 (Created)
    expect(response2.status()).toBe(201);

    // Parse the response JSON
    const result = await response2.json();
    console.log('POST Response:', result);

    // Assert that the created post contains the correct title
    expect(result.title).toBe('foo');
  });

});
