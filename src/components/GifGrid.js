import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({Categoria}) => {


    const {data:images, loading} = useFetchGifs(Categoria);
    
    return (
        
        <div className='divgrid'>
            <h2 className='titulo'>{Categoria}</h2>
            
            <div className='titulo'>
                {loading ? 'Cargando...' : ''}
            </div>

             <ol>
                    < div className = 'grid animate__animated animate__fadeIn' >
                    {                     
                        images.map(img => (
                            
                            <GifGridItem key={img.id} img= {img }/>
                        ))                        
                    }
                    </div>
            </ol>
        </div>
    )
}
