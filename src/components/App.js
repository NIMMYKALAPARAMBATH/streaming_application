import React from 'react';
import '../styles/styles.css';
import Layout from './Layout';
import NavBar from './NavBar';


function App() {
  return (
    <div className="container bg-black">
      <NavBar/>
      <Layout/>
    </div>
  )
}

export default App
