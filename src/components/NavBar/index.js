
import React, { useState } from 'react'; 
import './navbar.css'
import back from '../../assets/back.png';
import search from '../../assets/search.png';

function NavBar() {
    const [isSearchActive, setIsSearchActive] = useState(false);
    return(
        <div className='navbar h-32 fixed w-full bg-transparent bg-cover'>
            <div>
                {!isSearchActive ? 
                    <div className='mt-4 justify-between flex align-middle'>
                        <div className='flex items-start align-middle p-4'>
                            <div className='text-white text-xl'>Romantic Comedy</div>
                        </div>
                        <button style={{outline: 'none'}} className='button p-4' onClick={()=>{setIsSearchActive(true)}}>
                            <img src={search} className='button-image' alt="search"/>
                        </button>
                    </div>:
                    <div className='mt-4 justify-between flex align-middle' >
                        <button style={{outline: 'none'}} className='button p-4' onClick={()=>{setIsSearchActive(false)}}>
                            <img src={back} className='button-image' alt="back"/>
                        </button>
                        <div className='flex align-middle p-4 w-full'>
                            <input 
                            className='w-full bg-transparent text-white'
                            placeholder='Search...'
                            onChange={()=>{}}>
                            </input>
                        </div>
                        <button style={{outline: 'none'}} className='button p-4 text-white' onClick={()=>{}}>
                            Go
                        </button>
                    </div>}
            </div>
        </div>
    )
   
}

export default NavBar;