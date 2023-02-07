import { BASE_URL, API_KEY, LANG } from '../utils/contants';

export const fetchMovies = (page) => {
    return fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=${LANG}&page=${page}`)
    .then(response => response.json()
    .then(data => data.results));
}