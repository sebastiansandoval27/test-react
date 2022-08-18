import React, { useState } from "react";
import { AppContainer, AppContent, AppImage, Title } from "./app.style";
import Edit from "./components/Edit/Edit";
import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";
import { FormContext } from "./context/FormContext";

function App() {
  const [page, setPage] = useState(0);

  return (
    <FormContext>
      <Layout>
        {page === 0 ? <Title>Registro</Title> : <Title>Editar</Title>}
        <AppContainer>
          <AppImage>
            <img
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVnaXN0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Illustration"
            />
          </AppImage>
          <AppContent>
            {page === 0 && <Form changePage={() => setPage(1)} />}
            {page === 1 && <Edit changePage={() => setPage(0)} />}
          </AppContent>
        </AppContainer>
      </Layout>
    </FormContext>
  );
}

export default App;
