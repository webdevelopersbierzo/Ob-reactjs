import React from 'react';
import { Contact } from '../../models/contact.class';
import '../../style/contact_list.scss'

import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contact('Oscar', '999888777', false)
    return (
        <div>
            <h2>Contacts</h2>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>State</th>
                        <th scope='col'></th>
                    </tr>
                    
                </thead>
                <tbody>
                    <ContactComponent contact={defaultContact}></ContactComponent>
                </tbody>
               
            </table>
            <div>
                <i class="bi bi-plus-circle icon-plus"></i>
            </div>
            
        </div>
    );
};





export default ContactListComponent;
