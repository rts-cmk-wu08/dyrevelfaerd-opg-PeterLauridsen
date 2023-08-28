import React, { useState } from 'react';
import './NewsletterForm.css'; // Import your CSS file
import { Navigate } from 'react-router-dom';


const YourFormComponent = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (name.trim() === '') {
      alert('Please enter a name.');
      return;
    }

    // Submit the form
    // You can perform your submission logic here
    console.log('Form submitted:', email, name);

    // Clear form inputs
    setEmail('');
    setName('');
    setSubmitted(true);
  };

  const validateEmail = (email) => {
    // Basic email validation using regular expression
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
      <button type="submit" className='btn'>Tilmeld</button>
      </div>
    </form>
  );
};

export default YourFormComponent;
