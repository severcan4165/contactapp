import React from 'react'
import "./list.css"

function List({contact, setContact, filteredArray}){
  return (
    <>
     {filteredArray.length>0 ? 
       ( <table className='addedlist'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {filteredArray.map((item,index) => {
          return(
            <tr key={index}>
              <td>{item.fullname}</td>
              <td>{item.phone}</td>
          </tr>
          )
        })

        }
      

      </tbody>
    </table>): <h2>No Result to Show</h2>
    }
    </>
   

  )
}

export default List;