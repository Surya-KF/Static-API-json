import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data');
      const jsonData = await response.json();
      if (Array.isArray(jsonData)) {
        setData(jsonData);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]); // Set data to an empty array in case of an error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Static JSON Data</h1>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <p>ID: {item.id}</p>
              <p>Name: {item.name}</p>
              <p>Email: {item.email}</p>
              <p>Age: {item.age}</p>
              <p>Profession: {item.profession}</p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </header>
    </div>
  );
}

export default App;
