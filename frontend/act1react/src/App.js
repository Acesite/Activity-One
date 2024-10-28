import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios with npm

function App() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [bestTime, setBestTime] = useState('');
  const [btc, setBtc] = useState(''); // State for the btc field

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default behavior
    console.log('Form submitted');

    const studentData = {
      name,
      phone_number: phoneNumber, // Match the field name
      email,
      btc,
      best_time: bestTime, // Match the field name
    };

    console.log('Data to submit:', studentData);

    try {
      const response = await axios.post('http://localhost:3001/api/students', studentData); // Ensure the URL matches your backend
      console.log(response.data); // Handle the response from the server

      // Alert the user that the student was added successfully
      alert('Student added successfully!');

      // Refresh the page after a successful addition
      window.location.reload(); // This will refresh the page
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      alert('There was an error adding the student. Please try again.'); // Notify user of the error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <p>Best Time to Call  hehe :</p>
        <label>
          <input
            type="radio"
            value="Morning"
            checked={bestTime === 'Morning'}
            onChange={(e) => setBestTime(e.target.value)}
            required
          />
          Morning
        </label>
        <label>
          <input
            type="radio"
            value="Afternoon"
            checked={bestTime === 'Afternoon'}
            onChange={(e) => setBestTime(e.target.value)}
            required
          />
          Afternoon
        </label>
      </div>
      <div>
        <label>
          BTC:
          <input
            type="text" 
            value={btc}
            onChange={(e) => setBtc(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App; // Export the App component
