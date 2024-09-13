"use client";

import React, { useState, useEffect } from 'react';

function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMoreData = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setItems(prevItems => [...prevItems, ...Array.from({ length: 200 }, (_, i) => `Item ${prevItems.length + i + 1}`)]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchMoreData(); // Load initial data

    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        fetchMoreData();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default InfiniteScroll;
