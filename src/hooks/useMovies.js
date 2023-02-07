import { useState, useEffect } from 'react';
import { fetchMovies } from '../services/fetchMovies';

export const useMovies = (page) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies(page).then(data => setMovies(data))
    }, [page]);
    return { movies };
}