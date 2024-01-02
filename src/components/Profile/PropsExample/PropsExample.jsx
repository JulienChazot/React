import React, { useState } from 'react'

export default function PropsExample({ name, childClickHandler }) {

    const data = [
        {
            "name": "Jelani Dotson",
            "phone": "1-964-215-8067",
            "email": "non@outlook.ca",
            "address": "Ap #922-5937 Cum Rd."
        },
        {
            "name": "Zephania Tillman",
            "phone": "1-178-325-4230",
            "email": "laoreet.libero@yahoo.net",
            "address": "1097 Nec Road"
        },
        {
            "name": "Francis Lara",
            "phone": "(362) 919-6636",
            "email": "vitae.mauris@protonmail.org",
            "address": "Ap #172-6477 Cursus. Avenue"
        },
        {
            "name": "Ryder Walker",
            "phone": "(539) 834-1124",
            "email": "velit.cras.lorem@yahoo.edu",
            "address": "Ap #855-6135 Vel, Street"
        },
        {
            "name": "Nathan Diaz",
            "phone": "(627) 654-6562",
            "email": "feugiat@protonmail.ca",
            "address": "P.O. Box 508, 3318 Eget, Rd."
        }
    ];


    const [visible, setVisible] = useState(true)
  return (
    <>
    <div className="card" >{name}</div>
      <button onClick={() => 
      {
      setVisible(!visible);
      childClickHandler('test');}}
      >
        Click me !
      </button>
      <br></br>
      {visible && (
  <ul>
    {data.map((item) => (
      <>
        <li>key={item.phone}</li>
        <div>{item.phone}</div>
        <div>{item.email}</div>
        <div>{item.adresse}</div>
      </>
    ))}
  </ul>
)}

      </>
  )
}
