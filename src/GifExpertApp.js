import React, { useState } from 'react';
// Componente importado al cual mandare a llamar
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    // Creo la variable y el metodo que manipulara su estado
    const [categories, setCategories] = useState(['Dragon Ball']);
    
    return(
        <>
            <h2>GifExpertApp</h2>
            {/* Mando a llamar otro componente y le mando el metodo
                con el que manipula el estado de las categories*/}
            <AddCategory setCategories={setCategories}/>
            <hr/>  
            <ol>
                {/* Fragmento de codigo necesario para crear la lista */}
                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category} />
                    })
                }
            </ol>    
        </>
    );
}
