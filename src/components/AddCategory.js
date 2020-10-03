import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {


    const [inFiltro, setInFiltro] = useState('');

    const handleInputChange = (e) => {

        //Detectar cuando sea el enter

        setInFiltro(e.target.value);

    }

    const handleSubmit = (e) =>{

        e.preventDefault();//Esto evita el comportamiento por defecto del form  () envie y refresque la pagina)

        if(inFiltro.trim().length>2){
            setCategorias(cats => [inFiltro,...cats]);
            setInFiltro('');
        }


        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text" value={inFiltro} 
            onChange={ handleInputChange }
            placeholder="Ingresa tu busqueda"
            />
        </form>
    )


}


    //Defino que la propiedad de la funcion setCategoria debe ser obligatoria    
    AddCategory.propTypes = {

        setCategorias: PropTypes.func.isRequired

    }
