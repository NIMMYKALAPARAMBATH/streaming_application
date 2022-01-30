
import React, { useEffect, useState } from 'react'; 
import './layout.css';
import contents from '../../api/CONTENTLISTINGPAGE-PAGE1.json'


function Layout() {

    const [posters, setPosters] = useState([]);

    useEffect(()=>{
        const data = contents.page['content-items'].content;
        setPosters(data)
    },[]);

    return(
        <div className='wrapper pt-24 px-2'>
            {posters.map((poster, index)=>{
                const posterImage = require(`../../assets/posters/${poster['poster-image']}`)
                return (
                    <div key={index} className='px-2'>
                        <img src={posterImage} className='pb-1' alt=""/>
                        <div className='pb-6 pr-2 break-words text-white'>
                            {poster.name}
                        </div>
                    </div>
                )
            })}
        </div>
    )
   
}

export default Layout;