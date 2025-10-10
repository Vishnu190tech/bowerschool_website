#!/usr/bin/env node

/**
 * Test script to verify Zoho Campaigns API integration
 * Run with: node test-zoho-campaigns.js
 */

async function testZohoSubscription(email) {
  const baseUrl = 'http://localhost:3001'; // Server is running on port 3001

  console.log('\n===========================================');
  console.log('Testing Zoho Campaigns Subscription');
  console.log('===========================================');
  console.log(`Testing with email: ${email}`);
  console.log('-------------------------------------------');

  try {
    const response = await fetch(`${baseUrl}/api/zoho-campaigns/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    const data = await response.json();

    console.log('\nResponse Status:', response.status);
    console.log('Response Data:', JSON.stringify(data, null, 2));

    if (data.success) {
      console.log('\n✅ SUCCESS: Email subscribed successfully!');
      console.log('Message:', data.message);
    } else if (data.isDuplicate) {
      console.log('\nℹ️  DUPLICATE: Email already exists in the mailing list');
      console.log('Message:', data.message);
    } else {
      console.log('\n❌ FAILED: Subscription failed');
      console.log('Message:', data.message);
      if (data.errors) {
        console.log('Errors:', JSON.stringify(data.errors, null, 2));
      }
    }
  } catch (error) {
    console.error('\n❌ ERROR: Failed to make request');
    console.error('Error:', error.message);
    console.error('\nPlease ensure the development server is running on port 3001');
  }

  console.log('\n===========================================\n');
}

// Test with different email addresses
async function runTests() {
  // Test with a valid Gmail address
  await testZohoSubscription('test.user@gmail.com');

  // Wait 2 seconds between tests
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Test with a valid Yahoo address
  await testZohoSubscription('test.user@yahoo.com');

  // Wait 2 seconds between tests
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Test with the same email (should show as duplicate)
  await testZohoSubscription('test.user@gmail.com');

  // Wait 2 seconds between tests
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Test with an Outlook address
  await testZohoSubscription('test.user@outlook.com');

  // Wait 2 seconds between tests
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Test with a custom domain
  await testZohoSubscription('test@example.com');
}

// Run the tests
console.log('Starting Zoho Campaigns API tests...');
console.log('Make sure the dev server is running on http://localhost:3001');
runTests().then(() => {
  console.log('All tests completed!');
}).catch(error => {
  console.error('Test suite failed:', error);
});