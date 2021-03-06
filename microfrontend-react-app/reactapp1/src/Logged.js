import React, { useContext } from "react";
import { AuthProvider } from "@microfrontend-react-app/shared-library";

const Logged = () => {
  const { isLogged } = useContext(AuthProvider);
  return (
    <h1>
      isLogged: {isLogged !== undefined ? isLogged.toString() : "undefined"}
    </h1>
  );
};

export default Logged;
