
import React, { useEffect, useCallback } from 'react'; 
import {POSTER_IMAGE_URL, initialPageNumber} from '../../constants.js'
import './layout.css';
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, searchMovies } from '../../store/actions/movieAction.ts'
import placeholderForMissingImage from '../../assets/posters/placeholder_for_missing_posters.png'

function Layout() {

    const dispatch = useDispatch()
    const moviesList = useSelector((state) => state.moviesList)
    const { movies, loading, error } = moviesList

    useEffect(() => {
        dispatch(getMovies(initialPageNumber))
    }, [dispatch])


    // const loadNext = useCallback((pgNumber) => {
    //     if (pgNumber <= 3) {
    //         dispatch(getMovies(pgNumber))
    //     }
    // }, [dispatch])

    // const onSearch = useCallback((value) => {
    //     dispatch(searchMovies(value))
    // }, [dispatch])

    return(
        <div className='wrapper pt-24 px-2'>
            {movies?.map((poster, index)=>{
                const posterImage = POSTER_IMAGE_URL(poster['poster-image'])
                return (
                    <div key={index} className='px-2'>
                        <img 
                            src={posterImage} 
                            className='pb-1'
                            onError={(e)=>{
                                e.target.src=placeholderForMissingImage
                            }}
                            alt=""
                        />
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