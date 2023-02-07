import { useState, useEffect } from 'react';
import { BASE_URL, API_KEY, LANG } from '../utils/contants';

export const useMovies = (page) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=${LANG}&page=${page}`).then(response => response.json().then(data => {
            setMovies(data.results)
        }))
    }, [page]);
    return { movies };
}