import React, { useState } from "react";
import "./NewsletterForm.css"; // Import your CSS file
import { Navigate } from "react-router-dom";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert("Indtast venligst en email adresse.");
      return;
    }

    if (name.trim() === "") {
      alert("Indtast venligst et navn.");
      return;
    }

    console.log("Form submitted:", email, name);
    setEmail("");
    setName("");
    setSubmitted(true);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  if (submitted) {
    return <Navigate to="/thankyou" />;
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Navn"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <div>
        <button type="submit" className="btn">
          Tilmeld
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;
