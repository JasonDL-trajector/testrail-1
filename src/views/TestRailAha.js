// @ts-nocheck
import React, { useState, useEffect } from "react";
import TestRailDash from "./TestRailDash";

const Styles = () => {
  return (
    <style>
      {`
    .text-class {
      color: var(--aha-black-800);
    }

    input {
      width: 100%;
    }
    `}
    </style>
  );
};

const TestRailAha = ({ settings }) => {
  const [link, setLink] = useState(localStorage.getItem("testRailLink") || "");

  useEffect(() => {
    // Save the link to localStorage whenever it changes
    localStorage.setItem("testRailLink", link);
  }, [link]);

  // Pass settings or configuration data to the TestRailDash component
  return (
    <>
      <Styles />
      {/* Pass settings as a prop to TestRailDash */}
      {/* <TestRailDash settings={settings} /> */}
    </>
  );
};

// aha.on("testrail-1", ({ record, fields, onUnmounted }, { identifier, settings }) => {
//   // Pass settings to the TestRailAha component
//   return <TestRailAha settings={settings} />;
// });

export default TestRailAha;
