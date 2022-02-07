export const page1 = "CONTENTLISTINGPAGE-PAGE1.json";
export const page2 = "CONTENTLISTINGPAGE-PAGE2.json";
export const page3 = "CONTENTLISTINGPAGE-PAGE3.json";
export const assetsPath = {
    path: '../../assets/'
}
export const initialPageNumber = 1;
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_ERROR = 'MOVIES_ERROR';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const MOVIES_PAGE_URL = (pageNumber)=>`https://raw.githubusercontent.com/NIMMYKALAPARAMBATH/streaming_application/main/src/api/CONTENTLISTINGPAGE-PAGE${pageNumber}.json`;
export const POSTER_IMAGE_URL = (posterName)=>`https://raw.githubusercontent.com/NIMMYKALAPARAMBATH/streaming_application/main/src/assets/posters/${posterName}`;