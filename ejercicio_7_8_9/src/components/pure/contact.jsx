import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class.js';


function ContactComponent({contact}) {






  return (
    
        <tr>
            <th scope='row'>1</th>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td><i class="bi bi-circle-fill"></i></td>
            <td>
                <i class="bi bi-pencil-fill"></i>
                <i class="bi bi-trash"></i>

            </td>
        </tr>
   
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent
