import React, {useState} from 'react';
import PropTypes from 'prop-types';

// Recibo como parametro el metodo con el cual cambia de estado
// las categories del otro componenete
export const AddCategory = ({setCategories}) => {
    
    // Creo la variable y el metodo que manipulara su estado
    const [inputValue, setInputValue] = useState('');

    // Metodo handle del input que mandara a
    // llamar al metodo que manipula su estado
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // Metodo handle del formulario que se llamara cuando
    // detecte el submit de este (en esta caso el enter despues de llenar el input)
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 0) {
            // Mando a llamar el metodo que manipula las categories
            // del otro componente 
            setCategories( categories =>{
                return [inputValue,...categories];
            });
            // Mando a llamar el metodo que manipula el estado del input
            setInputValue('');
        }
    }

    return (
        <>
            <h2>Add Category</h2>
            {/* Cuando ocurra el evento onSubmit manda llamar al handleSubmit*/}
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange}/>
            </form>
        </>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}