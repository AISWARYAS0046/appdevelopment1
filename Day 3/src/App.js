import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import Signup from './Signup'; // Import the Signup component
import Login from './login'; // Import the Login component (assuming it's in a file named 'login.js')

function App() {
  return (
    <div className="App">
      <title>
        SOCIAL MEDIA APP
      </title>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
