import React, { useEffect } from "react";
import { APIClient, Openlaw } from "openlaw";
import OpenLawForm from "openlaw-elements";
// our optional base styles - feel free to use them!
import "openlaw-elements/dist/openlaw-elements.min.css";
const Law = () => {
  const apiClient = new APIClient("https://lib.openlaw.io/api/v1/default");
  useEffect(() => {
    apiClient.login("srinivas.valekar@gmail.com", "Qwerty@!23");
  }, [apiClient]);

  const { compiledTemplate } = Openlaw.compileTemplate(
    'This Advisor Agreement is entered into between [[Company Name]] ("Corporation") and [[Advisor Name]] ("Advisor") as of [[Effective Date: Date]] ("Effective Date"). Company and Advisor agree as follows: \n\n^**Services**. Advisor agrees to consult with and advise Company from time to time, at Company\'s request (the "Services")'
  );
  const { executionResult, errorMessage } = Openlaw.execute(
    compiledTemplate,
    {},
    {},
    {}
  );
  const variables = Openlaw.getExecutedVariables(executionResult, {});
  const parameters = {};

  // helpful for logging in development, or throwing exceptions at runtime
  if (errorMessage) {
    console.error("Openlaw Execution Error:", errorMessage);
  }

  const onChange = (key, value) => console.log("KEY:", key, "VALUE:", value);

  return (
    <div>
      {" "}
      <OpenLawForm
        // https://docs.openlaw.io/openlaw-elements/#required-parameters
        apiClient={apiClient}
        executionResult={executionResult}
        parameters={parameters}
        onChangeFunction={onChange}
        openLaw={Openlaw}
        variables={variables}
      />{" "}
    </div>
  );
};

export default Law;
