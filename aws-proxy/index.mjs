// Import necessary modules
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Function to fetch test case data
const fetchTestCaseData = async (testCaseId) => {
  if (!testCaseId) {
    throw new Error('Missing testCaseId in the request');
  }

  const response = await axios.get(`https://trajector.testrail.com/index.php?/api/v2/get_case/${testCaseId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    auth: {
      username: process.env.TESTRAIL_EMAIL,
      password: process.env.TESTRAIL_APIKEY,
    },
  });

  return response.data;
};

// Function to fetch the three latest test runs of a project, suite, and test case
const fetchLatestTestRuns = async (projectId, suiteId, testCaseId) => {
  const response = await axios.get(`https://trajector.testrail.com/index.php?/api/v2/get_runs/${projectId}&suite_id=${suiteId}&case_id=${testCaseId}&limit=3`, {
    headers: {
      'Content-Type': 'application/json',
    },
    auth: {
      username: process.env.TESTRAIL_EMAIL,
      password: process.env.TESTRAIL_APIKEY,
    },
  });

  return response.data;
};

// AWS Lambda handler function
export const handler = async (event) => {
  try {
    // Parse the request body to get the testCaseId
    const requestBody = JSON.parse(event.body);
    const testCaseId = requestBody.testCaseId;

    // Fetch test case data using the provided testCaseId
    const testCaseData = await fetchTestCaseData(testCaseId);

    // Fetch the three latest test runs of the specified project, suite, and test case
    const projectId = 14;
    const suiteId = 428;
    const latestTestRuns = await fetchLatestTestRuns(projectId, suiteId, testCaseId);

    // Prepare the API response including both testCaseData and latestTestRuns
    const apiResponse = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ testCaseData, latestTestRuns }),
    };

    return apiResponse;
  } catch (error) {
    console.error(error);

    // Handle errors and return an appropriate response
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
