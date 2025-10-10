#!/usr/bin/env node

/**
 * Test script to verify Contact CRM API integration
 * Run with: node test-contact-crm.js
 */

async function testContactSubscription(email, name = null, phone = null) {
  const baseUrl = 'http://localhost:3001';

  console.log('\n===========================================');
  console.log('Testing Contact CRM Subscription');
  console.log('===========================================');
  console.log(`Testing with email: ${email}`);
  if (name) console.log(`Name: ${name}`);
  if (phone) console.log(`Phone: ${phone}`);
  console.log('-------------------------------------------');

  try {
    const body = { email };
    if (name) body.name = name;
    if (phone) body.phone = phone;

    const response = await fetch(`${baseUrl}/api/contact/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    console.log('\nResponse Status:', response.status);
    console.log('Response Data:', JSON.stringify(data, null, 2));

    if (data.success) {
      console.log('\n✅ SUCCESS: Contact added to Zoho CRM successfully!');
      console.log('Message:', data.message);
      console.log('Lead ID:', data.leadId);
    } else if (data.isDuplicate) {
      console.log('\nℹ️  DUPLICATE: Contact already exists in Zoho CRM');
      console.log('Message:', data.message);
      if (data.leadId) console.log('Existing Lead ID:', data.leadId);
    } else {
      console.log('\n❌ FAILED: Failed to add contact');
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

// Test with different scenarios
async function runTests() {
  console.log('Starting Contact CRM API tests...');
  console.log('Make sure the dev server is running on http://localhost:3001');

  // Test 1: Email only
  await testContactSubscription('newcontact@gmail.com');
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Test 2: Email with name
  await testContactSubscription('john.doe@yahoo.com', 'John Doe');
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Test 3: Email with name and phone
  await testContactSubscription('jane.smith@outlook.com', 'Jane Smith', '+919876543210');
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Test 4: Duplicate email (should show as duplicate)
  await testContactSubscription('newcontact@gmail.com');
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Test 5: Invalid email (should fail validation)
  await testContactSubscription('invalid-email');
}

// Run the tests
runTests().then(() => {
  console.log('All tests completed!');
}).catch(error => {
  console.error('Test suite failed:', error);
});
