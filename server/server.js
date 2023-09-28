const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;

dotenv.config();

const apiKey = process.env.TESTRAIL_APIKEY; // Use the correct environment variable name
const email = process.env.TESTRAIL_EMAIL;

// Serve static files (e.g., your React app's build folder)
app.use(express.static(path.join(__dirname, 'build')));

// Define an API route to serve the TestRail data
app.get('/testrail-data', async (req, res) => {
  try {
    const apiKey = process.env.TESTRAIL_APIKEY; // Use the correct environment variable name
    const email = process.env.TESTRAIL_EMAIL; // Use the correct environment variable name
    const testCaseId = '11073'; // Replace with your desired test case ID
    const baseUrl = 'https://trajector.testrail.com/';
    const endpoint = `index.php?/api/v2/get_case/${testCaseId}`;

    const response = await axios.get(`${baseUrl}${endpoint}`, {
      auth: {
        username: email, // Use 'username' instead of 'email'
        password: apiKey, // Use 'password' instead of 'key'
      },
    });

    const testCaseData = response.data;
    console.log('Test Case data:', testCaseData); // Log the data on the server
    // console.log(email);
    // console.log(apiKey);

    // Send the data as JSON response to the client
    res.json(testCaseData);
  } catch (error) {
    // console.error('Error fetching TestRail data:', error);
    // res.status(500).json({ error: 'Internal server error' });
    // console.log(email);
    // console.log(apiKey);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
