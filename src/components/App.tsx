import React, {useState, useRef, useEffect} from 'react';
import '../styles/styles.css';
import Layout from './Layout';
import NavBar from './NavBar';


function App() {
  const [searchText, setText] = useState('');
  const layoutRef = useRef<any>(null);

  const setSearchValue = (value: string) =>{
    setText(value);
  }

  useEffect(() => {
		layoutRef?.current?.fetchData();
		window.addEventListener("scroll",() => {
      layoutRef?.current?.handleScroll();
    }, false);
	}, []);

  return (
    <div className="w-full bg-black">
      <NavBar setSearchValue={setSearchValue} />
      <Layout layoutRef={layoutRef} searchText={searchText}/>
    </div>
  )
}

export default App
