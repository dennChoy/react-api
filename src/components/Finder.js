import './Finder.css';

const Finder = (props) => {
    return(
        <div className='finder'>
            <button onClick={props.fetchMovies}>List Movies ;)</button>
            <button onClick={props.onOpenModal}>+</button>
        </div>
    );
}

export default Finder;