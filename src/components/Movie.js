import React from "react";
import { IMAGE_URL } from "../utils/contants";
import styles from './Movie.module.css'

const Movie = (props) => {

    return (
        <div className={styles['card']}>
            <h3>{props.movie.title}</h3>
            <img alt={`Portada de la pelicula ${props.movie.title}`} src={`${IMAGE_URL}${props.movie.poster_path}`} />
        </div>
    );

};

export default Movie;