import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestRailDash = () => {
  const [testCaseData, setTestCaseData] = useState(null);

  useEffect(() => {
    console.log('Fetching testcase data...');
    // Make a request to your server's endpoint to fetch TestRail data
    axios.get('/testrail-data')
      .then((response) => {
        const fetchedData = response.data;
        setTestCaseData(fetchedData);
        console.log('Test Case data fetched:', fetchedData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {testCaseData ? (
        <pre>{JSON.stringify(testCaseData, null, 2)}</pre>
      ) : (
        <p>Loading Test Case data...</p>
      )}
    </div>
  );
};

export default TestRailDash;
