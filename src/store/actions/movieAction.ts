import axios from 'axios'
import {GET_MOVIES, GET_MOVIES_ERROR, SEARCH_MOVIES, MOVIES_PAGE_URL} from '../../constants'

export const getMovies = (pageNumber:number) => async (dispatch: (arg0: { type: string; payload: any }) => void) => { 
    try{
        const response:any = await axios.get(MOVIES_PAGE_URL(pageNumber))
        dispatch( {
            type: GET_MOVIES,
            payload: response.data.page['content-items'].content
        })
    }
    catch(error){
        dispatch( {
            type: GET_MOVIES_ERROR,
            payload: error,
        })
    }

}

export const searchMovies = (search:string) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch( {
        type: SEARCH_MOVIES,
        payload: search
    })
}