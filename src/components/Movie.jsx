import React, { Fragment } from 'react'
// import movieObj from '../data/movieObj';

// const MovieList = movieObj.movies.map(movie => {
//     return (
//         <div className="movie" key={movie.name}>
//             <img src={process.env.PUBLIC_URL + "/resources/" + movie.name + ".jpg"} alt={movie.name} />
//         </div>
//     );
// })

const Movie = (props) => {

    const MovieList = (data) => data.map(movie => {
        return (
            <div className="movie" key={movie.name}>
                <img src={process.env.PUBLIC_URL + "/resources/" + movie.name + ".jpg"} alt={movie.name} />
            </div>
        );
    })

    return (
        <Fragment>
            {MovieList(props.data)}
        </Fragment>
    )
}

export default Movie;