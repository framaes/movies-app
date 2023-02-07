import React from "react";
import { IMAGE_URL } from "../utils/contants";

const Movie = (props) => {

    return (
        <li>
            <h3>{props.movie.title}</h3>
            <img alt={`Portada de la pelicula ${props.movie.title}`} src={`${IMAGE_URL}${props.movie.poster_path}`} />
        </li>
    );

};

export default Movie;