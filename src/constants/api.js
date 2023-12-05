const key = import.meta.env.VITE_API_KEY;

export const ROOT_PATH = 'https://api.themoviedb.org/3';
export const COMMING_SOON_QUERY = 'movie/upcoming';
export const COMMING_SOON_FULL = `${ROOT_PATH}/${COMMING_SOON_QUERY}?api_key=${key}`;

export const TOP_RATED_MOVIES = `${ROOT_PATH}/movie/top_rated?api_key=${key}`;

export const NOW_PLAYING_MOVIES = `${ROOT_PATH}//movie/now_playing?api_key=${key}`;

export const TV_TOP_RATED = `${ROOT_PATH}/tv/top_rated?api_key=${key}`;

export const IMG_PATH = 'https://image.tmdb.org/t/p';
export const IMG_PATH_SIZE_500 = 'https://image.tmdb.org/t/p/w500/';
