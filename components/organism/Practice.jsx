"use client";

import React, { useState, useEffect } from 'react';
import "../../pages/style.css";


function Practice() {


  // const [isVisible, setIsVisible] = useState(false);
  // const [count, setCount] = useState(0);
  // const [items, setItems] = useState([]);

  // const addItem = () => {
  //   setItems([...items, `Item ${items.length + 1}`]);
  // };

  // const [isOn, setIsOn] = useState(false);

  // const toggle = () => {
  //   setIsOn(!isOn);
  // };

  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  // const increment = () => {
  //   setCount(count + step);
  // };

  // const [email, setEmail] = useState('');
  // const [isValid, setIsValid] = useState(true);

  // const validateEmail = (value) => {
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   setIsValid(regex.test(value));
  // };

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setEmail(value);
  //   validateEmail(value);
  // };


  // const [user, setUser] = useState({ name: '', age: 0, email: '' });

  // const updateField = (field, value) => {
  //   setUser({
  //     ...user,
  //     [field]: value,
  //   });
  // };



  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}\nPassword: ${password}`);
  };



  return (
    <div>




      {/* <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}  TEXT
      </button>
      {isVisible && <p>THIS IS SOME TEXT</p>} */}
      {/* <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <p>Current Count: {count}</p>
      </div> */}
      {/* <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div> */}

      {/* <div>
        <button onClick={toggle}>
          {isOn ? 'Turn Off' : 'Turn On'}
        </button>
        <p>The button is {isOn ? 'ON' : 'OFF'}</p>
      </div> */}

      {/* <div>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          placeholder="Set step value"
        />
        <button onClick={increment}>Increment by {step}</button>
        <p>Current Count: {count}</p>
      </div> */}

      {/* <div>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {!isValid && <p style={{ color: 'red' }}>Invalid email format</p>}
      </div> */}

      {/* <div>
        <input
          type="text"
          value={user.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder="Enter your name"
        />
        <input
          type="number"
          value={user.age}
          onChange={(e) => updateField('age', e.target.value)}
          placeholder="Enter your age"
        />
        <input
          type="email"
          value={user.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="Enter your email"
        />
        <p>
          Name: {user.name}, Age: {user.age}, Email: {user.email}
        </p>
      </div> */}


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>


    </div>
  )
}

export default Practice
