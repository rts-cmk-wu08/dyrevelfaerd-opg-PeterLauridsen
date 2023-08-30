import React, { useState } from "react";
import "./NewsletterForm.css"; // Import your CSS file
import { Navigate, json } from "react-router-dom";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault(); // preventDefault er en metode, der forhindrer, at en handling udføres, når den er forbundet med et event. 
    //I dette tilfælde er det submit eventet, der bliver forhindret i at blive udført.

    if (!validateEmail(email)) {
      alert("Indtast venligst en email adresse.");
      return;
    }

    if (name.trim() === "") {  // name.trim() fjerner alle mellemrum foran og bagved navnet
      alert("Indtast venligst et navn.");
      return;
    }

    console.log("Form submitted:", email, name);
    fetch("http://localhost:4000/api/v1/subscribers", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({
        name,
        email
      }
      )
    })
      .then(response => {
        console.log(response)
        setSubmitted(true);
        setEmail("");
        setName("");
      })
      .then(JSON => console.log(JSON))
      .catch(err => console.error(err));

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
