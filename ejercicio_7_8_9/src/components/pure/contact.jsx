import React,{ useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class.js';


function ContactComponent({contact, remove, updateConnection}) {
    
    

    const [isOnline, setIsOnline] = useState(contact.conect);
    
    
   useEffect(() => {

     setIsOnline(!contact.conect);
    
    
   }, [updateConnection])

   
   
   
    
   
   function isConnectIconState(){

        if(!isOnline){      
            
            return <i className='bi bi-circle-fill' style={{color:'green'}}></i>

        }else{
            
            return <i className='bi bi-circle-fill' style={{color:'red'}} ></i>
        }
        
   }
   function isConectButton(){
       
        let result = isOnline ? 
            <button onClick={()=>updateConnection(contact)} type='button'  id='btnConect' className='btn btn-outline-primary'>Connect</button>
             : 
            <button onClick={()=>updateConnection(contact)} type='button' id='btnConect' className='btn btn-outline-danger'>Disconnect</button>

        return result;
   }
   

   
  return (
    
        <tr>
            <th scope='row'></th>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{isConnectIconState()}</td>
            <td>
            
                 <i className='bi bi-pencil-fill'></i>
                 <i className='bi bi-trash' onClick={()=>remove(contact)}></i>

            </td>
            <td>
                {isConectButton(isOnline)}
            </td>

        </tr>
   
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    remove: PropTypes.func.isRequired,
    
    
    
}

export default ContactComponent
