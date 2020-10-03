import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //Para cambiar valores de variables y que React renderize
    const [categorias, setCategorias] = useState([]);
    

    console.log(categorias);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategorias = {setCategorias}/>

            <ol>
            {
                categorias.map(categoria => (
                    <GifGrid  
                    key={ categoria } 
                    Categoria={categoria} 
                    />
                ))
            }
            </ol>
        </>
    )
}

