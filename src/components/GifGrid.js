import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // De nuestro custom Hook useFetchGifs mandamos la category
    // Y esto nos regresa el arreglo de imagenes y el estado del loading
    const { data:images, loading } = useFetchGifs( category );

    //const apiKey = 'S7Edw6BztWrSvPbTpbDllb2OMdqtc21H';

    return (
        <>
            {/* Clases css de animate.css */}
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {/* indicamos que muestre loagind en caso de que sigan cargando */}
            { loading && <p className="animate__animated animate__flash">Loading</p> }

            {/* Por cada imagen tendremos la imagen con el formato especificado */}
            <div className="card-grid">
                {
                    images.map( (img) => {
                        return <GifGridItem key={img.id} {...img}/>
                    })
                } 
            </div>
        </>
    );
}

