import React, { useState, useEffect } from 'react';

const ShowAllPizzas = () => {
  const [list, setList] = useState([]);
  const [deleteKey, setDeleteKey] = useState('');

  const del = (item) => {
    setDeleteKey(item);
    handleDelete();
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/pizza/delete/${deleteKey}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      } else {
        console.log('Pizza deleted successfully');
        // After successful deletion, you may want to fetch and update the list
        showData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const showData = async () => {
    try {
      const response = await fetch('http://localhost:3000/pizza/allpizza', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const responseData = await response.json();

      console.log('Response Data:', responseData);

      const { message, response: data } = responseData;

      if (message === 'Success' && Array.isArray(data)) {
        setList(data);
      } else {
        console.error('Invalid data structure received:', message, data);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    showData();
  }, []); // Empty dependency array means the effect runs only once on mount

  console.log('List:', list);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Menu</h1>
      <ul>
        {list.map((item) => (
          <li key={item._id}>
            {item.name}
            <button>Update</button>
            <button onClick={() => del(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px'
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px'
  }
};

export default ShowAllPizzas;
