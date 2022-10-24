import React, { useState } from "react";
import "./form.css";
import List from "../List/List.jsx";

let filteredArray;
function Form({ contact, setContact }) {
  const [input, setInput] = useState({
    fullname: "",
    phone : ""
  });


  const [filterQuery, setFilterQuery] = useState("");
  // const [filteredList, setFilteredList] = useState([]);

  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value });
   
 
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.fullname === "" || input.phone === ""){
      return alert("Please fill  phone and name areas correctly")
    }
    // console.log(input);
    setContact([...contact, {...input}]);
    console.log(contact);
    setInput({
      fullname: "",
      phone : ""
    })

  };
  

  const handleFilter = (e) => {
    setFilterQuery(e.target.value);
    // setFilteredList(filteredArray)
  };

  filteredArray  = contact?.filter(item => {
    return (
      Object.keys(item).some((keys) => {
        return item[keys].toString().toLocaleLowerCase().includes(filterQuery.toLocaleLowerCase())})
    )
   
  });
 



  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact List</h1>

         {/* ----------- Search Bar  ---------- */}
        <div>
          <h2>Search Bar</h2>
          <input
            value={filterQuery}
            className="input"
            type="text"
            onChange={handleFilter}
            placeholder="Search by name or phone number"
          />
        </div>
        
        
       

       
        {/* ----------- input Name and Phone ---------- */}
        <div>
          <h2>Name</h2>
          <input
            value={input.fullname}
            className="input"
            onChange={handleChange}
            type="text"
            name="fullname"
            placeholder="Please enter a name"
          />
        </div>
        <div>
          <h2>Phone Number</h2>
          <input
            value={input.phone}
            className="input"
            onChange={handleChange}
            type="text"
            name="phone"
            placeholder="Please enter a phone number"
          />
        </div>
    {/* ----------- Added Name and Phone List ---------- */}
        <List contact = {contact} setContact = {setContact} input = {input} filteredArray = {filteredArray} />


         {/* ----------- Button ---------- */}
        <div className="butnDiv">
          <button className="butn">ADD</button>
        </div>
      </form>
    </>
  );
}

export default Form;
