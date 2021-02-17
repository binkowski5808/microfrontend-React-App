import React from "react";

import { AuthProvider } from "@microfrontend-react-app/shared-library";

function App() {
  return (
    <div>
      <h1>Context Provider</h1>
      <h2>App 1</h2>
      <AuthProvider.Provider value={{ isLogged: true }}></AuthProvider.Provider>
    </div>
  );
}

export default App;
