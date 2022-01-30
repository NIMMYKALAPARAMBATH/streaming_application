
import React from 'react'; 
import './navbar.css'
import back from '../../assets/back.png';
import search from '../../assets/search.png';

function NavBar() {
    return(
        <div className='navbar h-32 fixed w-full bg-transparent bg-cover'>
            <div className='mt-4 justify-between flex align-middle'>
                <div className='flex items-start align-middle p-4'>
                    <button style={{outline: 'none'}} className='button pr-4'>
                        <img src={back} className='button-image' alt="back"/>
                    </button>
                    <div className='text-white text-xl'>Romantic Comedy</div>
                </div>
                <button style={{outline: 'none'}} className='button p-4'>
                    <img src={search} className='button-image' alt="back"/>
                </button>
            </div>
        </div>
    )
   
}

export default NavBar;