import React, {useState } from 'react';
import '../styles/styles.css';
import Layout from './Layout';
import NavBar from './NavBar';


function App() {
  const [searchText, setText] = useState('');

  const setSearchValue = (value: string) =>{
    setText(value);
  }

  return (
    <div className="w-full bg-black">
      <NavBar setSearchValue={setSearchValue} />
      <Layout searchText={searchText}/>
    </div>
  )
}

export default App
