import React from 'react'
import ItemComponent from './ItemComponent'

function CardComponent({ items, onDeleteItem }) {
  return (
 
        <ul className='item-list'>
          {items.map((element)=>{
            console.log("element CardComponent",element)
            return   <ItemComponent key={element.id} onDelete={onDeleteItem} {...element} />
           
          })}
        </ul>
   
  )
}

export default CardComponent