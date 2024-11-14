import React from 'react'
import '../addInventoryItem/AddItem.css'
import { Link } from 'react-router-dom'

const editItem = () => {
  return (
    <div className='add-items'>
    <Link to={'/'} className='back'><i class="fa-solid fa-circle-chevron-left"> back</i></Link>
    <h3>Update Inventory Item</h3>
    <form action="" className='add-item-form'>
      <div className="input-item">
          <label htmlFor="itemName">Item Name</label>
          <input type="text"  id='itemName' name='itemName' autoComplete='off' placeholder='Item Name'/>
      </div>

      <div className="input-item">
          <label htmlFor="quantity">Quantity</label>
          <input type="number"  id='quantity' name='quantity' autoComplete='off' placeholder='Quantity'/>
      </div>

      <div className="input-item">
          <label htmlFor="price">Price</label>
          <input type="number"  id='price' name='price' autoComplete='off' placeholder='Price'/>
      </div>

      <div className="input-item">
          <label htmlFor="description">Description</label>
          <input type="text"  id='description' name='description' autoComplete='off' placeholder='Description'/>
      </div>

      <div className="input-item">
          <label htmlFor="category">Category</label>
          <input type="text"  id='category' name='category' autoComplete='off' placeholder='category'/>
      </div>

      <div className="input-item">
          <button type='submit'>UPDATE ITEM</button>
      </div>
    </form>
  </div>
  )
}

export default editItem
