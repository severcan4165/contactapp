import React, {useState} from 'react'
import Form from './Form/Form'


function Contacts() {
  const [contact, setContact] = useState([]);



  return (
    <div>
  
        <Form contact = {contact} setContact = {setContact} />
    </div>
  )
}

export default Contacts

