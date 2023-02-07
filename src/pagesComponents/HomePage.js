import { useState } from 'react';
import Movie from '../components/Movie/Movie';
import { useMovies } from '../hooks/useMovies';

const HomePage = () => {
    const [page, setPage] = useState(1);
    const { movies } = useMovies(page);

    const previousClickHandler = () => {
        if(page > 1) {
            setPage(page - 1);
            console.log(page)
        }
    }

    const nextClickHandler = () => {
        if(page < 10) {
            setPage(page + 1);
        }
    }

    return movies ? (
        <>
            <div>
                <button onClick={previousClickHandler}>Previous</button>
                {page}
                <button onClick={nextClickHandler}>Next</button>
            </div>

            <ul>
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </ul>
        </>
    )
        : <div>Loading...</div>
}

export default HomePage;