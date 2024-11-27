"use client";
import Home from './home';
import React, { useState, useEffect } from 'react';



function index() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // This will run only on the client side
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };



  return (
    <div>

      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <header className='text-center flex justify-center items-center'>
          <button onClick={toggleDarkMode} className='text-center flex justify-center items-center'>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </header>
        <main>
          <Home />
        </main>
      </div>
      {/* <Practice /> */}
      {/* <AnimatedComponent/> */}
      {/* <Chart /> */}
      {/* <InfiniteScroll /> */}
      {/* <DragAndDrop /> */}

    </div>
  )
}

export default index