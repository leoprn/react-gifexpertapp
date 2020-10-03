import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({img}) => {

    return (
        < div className = 'gif animate__animated animate__fadeIn' >
            <img src={img.url} alt={img.title}></img>
            <p>{img.title}</p>
        </div>
    )
}


//Defino que la propiedad de la funcion setCategoria debe ser obligatoria    
GifGridItem.propTypes = {

    img: PropTypes.func.isRequired

}