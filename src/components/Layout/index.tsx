
import React, { useEffect, useCallback, useState } from 'react'; 
import {POSTER_IMAGE_URL} from '../../constants.js'
import './layout.css';
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, searchMovies } from '../../store/actions/movieAction'
import placeholderForMissingImage from '../../assets/posters/placeholder_for_missing_posters.png'

function Layout(props: any) {
    const {searchText, layoutRef} = props;
	const [isFetching, setIsFetching] = useState(false);
	const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const moviesList = useSelector((state: any) => state.moviesList);
    const { movies, loading, error } = moviesList;
    
    const handleScroll = () => {
		if (
			Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
			isFetching
		){
            return;
        }
		setIsFetching(true);
	};

    const fetchData = () => {
        if (page <= 3) {
            dispatch(getMovies(page));
            setPage(page + 1);
        }
    }

    useEffect(() => {
        const functions = {handleScroll, fetchData};
		layoutRef.current = functions;
	}, []);

    useEffect(() => {
		if (isFetching) {
            fetchMoreListItems();
        }
	}, [isFetching]);

	const fetchMoreListItems = () => {
		fetchData();
		setIsFetching(false);
	};

    useEffect(() => {
        onSearchMovie(searchText);
    },[searchText])

    const onSearchMovie = useCallback((value) => {
        dispatch(searchMovies(value))
    }, [dispatch])

    return(
        <div className='wrapper pt-24 px-2'>
            {loading ? "Loading..." : null}
            {movies?.map((poster: any , index: number)=>{
                const posterImage = POSTER_IMAGE_URL(poster['poster-image'])
                return (
                    <div key={index} className='px-2'>
                        <img 
                            src={posterImage} 
                            className='pb-1'
                            onError={(e: any)=>{
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
            <div className="text-white">{error?.message}</div>
        </div>
    )
   
}

export default Layout;