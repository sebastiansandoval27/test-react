import React from "react";
import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";
import { FormContext } from "./context/FormContext";

function App() {
  return (
    <FormContext>
      <Layout>
        <Form />
      </Layout>
    </FormContext>
  );
}

export default App;
