import React from 'react'
import './Inventory.css'
import { Link } from 'react-router-dom'

const Inventory = () => {
  return (
    <div className='inventory-table'>
      <Link to={'/add'} className='add-button'>Add Inventory</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>apple</td>
            <td>2</td>
            <td>30</td>
            <td>tasty</td>
            <td>fruits</td>
            <td className='action-button'>
              <button>Delete</button>
              <Link to={'/edit'}>Edit</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Inventory;
