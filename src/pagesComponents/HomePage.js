import { useState } from 'react';
import Movie from '../components/Movie';
import { useMovies } from '../hooks/useMovies';

const HomePage = () => {
    const [page, setPage] = useState(1);
    const { movies } = useMovies(page);

    return movies ? (
        <>
            {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </>
    )
        : <div>Loading...</div>
}

export default HomePage;