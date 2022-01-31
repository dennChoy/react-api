import React, {useRef} from "react";
import Modal from './Modal';
import './Movies.css'

const AddMovie = (props) => {

    const iptTitle = useRef();
    const iptOpeningText = useRef();
    const iptReleaseDate = useRef();

    const submitMovie = (event) => {
        event.preventDefault();
        const movie = {
            title: iptTitle.current.value,
            openingText: iptOpeningText.current.value,
            releaseDate: iptReleaseDate.current.value
        }

        props.onAddMovie(movie);
    }


    return(
        <Modal>
            <form onSubmit={submitMovie}>
                <div className="inputs">
                    <div>
                        <label htmlFor="title">Nombre</label>
                        <input type="text" id="title" ref={iptTitle}/>
                    </div>
                    <div>
                        <label htmlFor="opening_text">Texto de apertura</label>
                        <input type="text" id="opening_text" ref={iptOpeningText}/>
                    </div>
                    <div>
                        <label htmlFor="release_date">Fecha de lanzamiento</label>
                        <input type="date" id="release_date" ref={iptReleaseDate}/>
                    </div>
                </div>
                <div className="actions">
                    <button type="submit">Agregar Película</button>
                    <button type="button" onClick={props.onCloseModal}>Cancelar</button>
                </div> 
            </form>
        </Modal>
    );
}

export default AddMovie;