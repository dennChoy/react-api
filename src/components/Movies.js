import './Movies.css';

const Movies = (props) => {

    const movieList = (
        <ul>
            {props.movies.map((movie) => (
                <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <section>{movie.openingText}</section>
                </li>
            ))}
        </ul>
    );

    return(
        <div className='movies-container'>
            {movieList}
        </div>
    );
}
export default Movies;