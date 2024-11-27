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

        <main>
          <Home />
        </main>
      {/* <Practice /> */}
      {/* <AnimatedComponent/> */}
      {/* <Chart /> */}
      {/* <InfiniteScroll /> */}
      {/* <DragAndDrop /> */}

    </div>
  )
}

export default index