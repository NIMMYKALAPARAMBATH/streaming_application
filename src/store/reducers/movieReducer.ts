import {GET_MOVIES, GET_MOVIES_ERROR, SEARCH_MOVIES} from '../../constants'

const initialState = {
    allMovies: [],
    movies:[],
    search: '',
    loading:true
}

const searchMovies = (movies: any[], searchString: string) => {
    const searchExp = new RegExp(searchString, 'i');
    const filteredMovies = movies.filter((item)=>(searchExp.test(item.name)))
    return filteredMovies;
}

export default function movieReducer(state = initialState, action: { type: string; payload: any }){
    switch(action.type){
        case GET_MOVIES:
        return {
            ...state,
            allMovies: [...state.allMovies,...action.payload],
            movies:[...state.movies,...searchMovies(action.payload, state.search)],
            loading:false

        }
        case SEARCH_MOVIES:
        return {
            ...state,
            search: action.payload,
            movies:searchMovies(state.allMovies, action.payload),
        }
        case GET_MOVIES_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}