import React, { useState } from 'react';

const CreatePizza = () => {
  const [name, setName] = useState("");

  const handlePress = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      fetch("http://localhost:3000/pizza/create", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
      })
        .then(response => response.json())
        .then(setName(''))
        .catch(err => console.error(err));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Enter Pizza</h1>
      <form onSubmit={handlePress}>
        <label style={styles.label}>Pizza Name:</label>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <button type='submit' style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  label: {
    fontSize: '16px',
    marginRight: '10px',
  },
  input: {
    padding: '5px',
    fontSize: '14px',
  },
  button: {
    padding: '8px 12px',
    fontSize: '16px',
    marginTop: '10px',
    cursor: 'pointer',
  },
};

export default CreatePizza;
