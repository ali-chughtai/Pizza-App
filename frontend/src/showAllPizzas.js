import React, { useState, useEffect } from 'react';

const ShowAllPizzas = () => {
  const [list, setList] = useState([])
  const [deleteKey, setDeleteKey] = useState('')

  

  const handleDelete = async (item) => {
    try {
      const response = await fetch(`http://localhost:3000/pizza/delete/${item}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      } else {
        console.log('Pizza deleted successfully');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    
    const showData = async () => {
        try {
          const response = await fetch("http://localhost:3000/pizza/allpizza", {
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
      
          if (message === 'Succes' && Array.isArray(data)) {
            setList(data);
          } else {
            console.error('Invalid data structure received:', message, data);
          }
        } catch (err) {
          console.error('Error fetching data:', err);
        }
      };
      
        
    showData();
  }, []); // Empty dependency array means the effect runs only once on mount
  
  console.log('List:', list);
  
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Menu</h1>
      <ul>
        {list.map((item) => (
          <li key={item._id}>{item.name}
                <button>Update</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
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

export default ShowAllPizzas;
