import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Success = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const generateToken = async () => {
      const sessionId = searchParams.get("session_id");
      const { data } = await axios.post("http://localhost:4000/generate-token", {
        session_id: sessionId,
        email: "user_email@example.com", // Replace with the user's email
      });

      localStorage.setItem("auth_token", data.token);
      alert("Subscription successful! Token saved.");
    };

    generateToken();
  }, [searchParams]);

  return <h1>Payment Successful!</h1>;
};

export default Success;
