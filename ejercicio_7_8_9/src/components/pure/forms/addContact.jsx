import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const AddContactComponent = ({add}) => {

    

    // creamos la referencia de lo que queremos cambiar
    const nameRef = useRef('');
    const phoneRef = useRef('');
    

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            phoneRef.current.value,
            false
            
        );
        add(newContact);
    }
    return (
        <div id='formAddContact'className='d-block'>
            <form onSubmit={addContact}>
                    
                    <div className='form-text lg'>
                        <input ref={nameRef} id='inputName' className='form-control d-table-cell' type='text' required autoFocus placeholder='name'></input> 
                        <input ref={phoneRef} id='inputPhone' className='form-control d-table-cell' type='text' required  placeholder='phone'></input>
                        
                    </div>
        
                    
                    <button type='Submit' className='btn btn-success btn-lg ms-2'>Submit</button>
                </form>
        </div>
        
           
            
        
    );
};


AddContactComponent.propTypes = {
    add: PropTypes.func.isRequired
};


export default AddContactComponent;
