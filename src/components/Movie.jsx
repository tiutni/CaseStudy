import React, { Fragment } from 'react'
// import movieObj from '../data/movieObj';

// const MovieList = movieObj.movies.map(movie => {
//     return (
//         <div className="movie" key={movie.name}>
//             <img src={process.env.PUBLIC_URL + "/resources/" + movie.name + ".jpg"} alt={movie.name} />
//         </div>
//     );
// })

const MovieList = (data) => data.map(movie => {
    return (
        <div className="movie" key={movie.name}>
            <img src={process.env.PUBLIC_URL + "/resources/" + movie.name + ".jpg"} alt={movie.name} />
        </div>
    );
})

export default function Movie(props) {
    return (
        <Fragment>
            {MovieList(props.data)}
        </Fragment>
    )
}