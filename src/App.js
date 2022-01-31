import React, { useCallback, useEffect, useState } from "react";
import AddMovie from "./components/AddMovie";
import Finder from "./components/Finder";
import Movies from "./components/Movies";
function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchMoviesHandler = useCallback(async () => {
    setError(null);
    setLoading(true);
    try{
      const response = await fetch('https://react-http-f96ff-default-rtdb.firebaseio.com/movies.json');

      if(!response.ok){
        throw new Error('Something went wrong');
      }
      
      const data = await response.json();
      const loadedMovies = [];
      
      for(const key in data){
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText
        });
      }

         
      /*const transformedMovies = data.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      });*/

      setMovies(loadedMovies);
    }catch (error){
      setError(error.message);
    }   
    setLoading(false);
  }, []);

  const addMovieHandler = useCallback(async (movie) => {

    const response = fetch('https://react-http-f96ff-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
  }, []);

  useEffect(() => {
    fetchMoviesHandler(); 
  }, [fetchMoviesHandler]);

  let content = <p>No hay nada para mostrar</p>;
  if (movies.length > 0){
    content = <Movies movies={movies}/>;
  }

  if(error){
    content = <p>{error}</p>;
  }

  if(isLoading){
    content = <p>Carganding...</p>;
  }
  
  const CloseModalHandler = () => {
    setModalOpen(false)
  } 

  const OpenModalHandler = () => {
    setModalOpen(true);
  }
  
  return (
    <React.Fragment>
        {isModalOpen && <AddMovie onCloseModal={CloseModalHandler} onAddMovie={addMovieHandler}/>}
        <Finder fetchMovies={fetchMoviesHandler} onOpenModal={OpenModalHandler}/>
        {content}
    </React.Fragment>
  );
}

export default App;
