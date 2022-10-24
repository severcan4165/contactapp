import React, {useState,useEffect} from 'react'
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

