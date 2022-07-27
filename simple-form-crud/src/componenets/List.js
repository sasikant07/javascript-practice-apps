import React from 'react'

const List = ({ list, handleDelete }) => {
  return (
    <div>
      {list.map((item, index) => {
        return <div
          key={index}
          style={{
            display: 'grid',
            gridTemplateColumns: "1fr auto auto",
            gap: ".25 rem",
            marginBottom: ".5rem"
          }}>
          <ul>
            <li>{item}</li>
            <p onClick={() => handleDelete(item)}>Delete</p>
          </ul>
        </div>
      })
      }
    </div>
  )
}

export default List