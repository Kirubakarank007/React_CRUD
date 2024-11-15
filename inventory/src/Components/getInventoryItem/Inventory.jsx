import React, { useEffect, useState } from 'react'
import './Inventory.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Inventory = () => {

  const [items,setItems]=useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
     const response= await axios.get("http://localhost:5000/items/getall")
     setItems(response.data);
    };

    fetchData();
  },[])

  const deleteItem=async(item_id,item_name)=>{
    await axios.delete(`http://localhost:5000/items/delete/${item_id}`)
    .then((res)=>{
      setItems((prevItem)=>prevItem.filter((item)=>item._id !== item_id))
      toast.success(`${item_name} ${res.data.msg}`)
    }).catch(err=>console.log(err))
  }
  
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
          {
            items.map((item,index)=>{
              return  (<tr key={item._id}>
              <td>{index+1}</td>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td className='action-button'>
                <button onClick={()=>{deleteItem(item._id,item.itemName)}}><i className="fa-solid fa-trash-can"></i></button>
                <Link to={`/edit/`+item._id}><i className="fa-solid fa-pen-clip"></i></Link>
              </td>
            </tr>
            )})
          }
         
        </tbody>
      </table>
    </div>
  )
}

export default Inventory;
