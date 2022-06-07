import React,{ useState } from 'react';
import { Contact } from '../../models/contact.class';
import '../../style/contact_list.scss'
import ContactComponent from '../pure/contact';
import AddContactComponent from '../pure/forms/addContact';




const ContactListComponent = () => {

    const defaultContact = new Contact('Oscar', '999888777', true);
    const defaultContact1 = new Contact('Carlos', '777888999', false);
    const defaultContact2 = new Contact('Felipe', '333444555', true);

   // state of component
   const [contacts, setContacts] = useState([defaultContact, defaultContact1, defaultContact2]);

   function deleteContact(contact){
       console.log('Delete contact');
       const index = contacts.indexOf(contact);
       const tempContacts = [...contacts];
       tempContacts.splice(index,1);
       setContacts(tempContacts);
      }
    function updateConnection(contact){
        console.log('update connection');
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conect =!tempContacts[index].conect;
        setContacts(tempContacts);

    }
    
    // function updateContactPhone(contact){
    //     console.log('update phone');
    //     const index = contacts.indexOf(contact);
    //     const tempContacts = [...contacts];
    //     tempContacts[index].phone = '1111111';
    //     setContacts(tempContacts);
    // }
    
    function addContact(contact){
        console.log('add connection');
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }
    
        
    return (
        <div className='container-lg' >
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
                    {contacts.map((contact, index)=>{
                        return (
                            <ContactComponent
                                key={ index }
                                contact={ contact }
                                remove={ deleteContact }
                                updateConnection={updateConnection}
                                
                                
                                >

                            </ContactComponent>
                            
                            
                        )
                    })}
                    
                    
                </tbody>
               
            </table>

            <div>
                <i className='bi bi-plus-circle icon-plus'  ></i>
            </div>
            <div>
            <AddContactComponent
                add={ addContact}
            ></AddContactComponent>
            </div>
            
        </div>
    );
};





export default ContactListComponent;
