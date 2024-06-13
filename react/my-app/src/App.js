import logo from './logo.svg';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar Logotext = "ayush" />
      <div className="counter">{count}</div>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <Footer />
    </div>
  );
}

export default App;
