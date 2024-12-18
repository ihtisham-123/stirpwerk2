import React, { useEffect, useState } from "react";
import axios from "axios";

const ProtectedPage = () => {
  const [accessGranted, setAccessGranted] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("auth_token");
      const { data } = await axios.post("http://localhost:4000/validate-token", { token });

      setAccessGranted(data.valid);
    };

    validateToken();
  }, []);

  if (!accessGranted) {
    return <h1>Subscription Required</h1>;
  }

  return <h1>Welcome to the Protected Content!</h1>;
};

export default ProtectedPage;
