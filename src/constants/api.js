import key from '../key';

export const ROOT_PATH = 'https://api.themoviedb.org/3';
export const COMMING_SOON_QUERY = 'movie/upcoming';
export const COMMING_SOON_FULL = `${ROOT_PATH}/${COMMING_SOON_QUERY}?api_key=${key}`;
