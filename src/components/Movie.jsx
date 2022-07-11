import React, { Fragment } from 'react'

const movieObj = {
    "movies" : [
        {
            "name" : "인기1"
        }
        ,{
            "name" : "인기2"
        }
        ,{
            "name" : "인기3"
        }
        ,{
            "name" : "인기4"
        }
        ,{
            "name" : "인기5"
        }
        ,{
            "name" : "인기6"
        }
    ]
}

const MovieList = movieObj.movies.map(movie => {
    return (
        <div className="movie" key={movie.name}>
            <img src={process.env.PUBLIC_URL + "/resources/" + movie.name + ".jpg"} alt={movie.name} />
        </div>
    );
})

export default function Movie() {
    return (
        <Fragment>
            {MovieList}
        </Fragment>
    )
}