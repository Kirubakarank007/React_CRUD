import React, { useState } from 'react';
import './AddItem.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddItem = () => {

  const items={
    itemName:"",
    quantity:"",
    price:"",
    description:"",
    category:""

  }

  const [item, setItem]=useState(items);
  const navigate=useNavigate();

  const inputHandler=(e)=>{
    const {name,value}=e.target;
     setItem({...item,[name]:value})
  }


  const validation=(item)=>{
    if (!item.itemName) {
      toast.error("Please fill Item Name field", { position: "top-center" });
      return false; // Stop form submission if any field is empty
    }else if(!item.quantity){
      toast.error("Please fill quantity field")
      return false; 
    }else if(!item.price ){
      toast.error("Please fill Price field")
      return false; 
    }else if(!item.description ){
      toast.error("Please fill Description field")
      return false; 
    }else if(!item.category){
      toast.error("Please fill Category field")
      return false; 
    }else{
      return true;
    }
  }

  const submitForm = async (e) => {
    e.preventDefault();
    const validate=validation(item);
    console.log(item); // Log to confirm the data being sent
    if(validate){ 
      try {
        const response = await axios.post("http://localhost:5000/item/create", item);
          toast.success(response.data.msg,{position:"top-center"});
          navigate("/")
      } catch (error) {
        console.error("Error:", error);
      }}
  };
  
  return (
    <div className='add-items'>
      <Link to={'/'} className='back'><i className="fa-solid fa-circle-chevron-left"> back</i></Link>
      <h3>Add New Inventory Item</h3>
      <form action="" className='add-item-form' onSubmit={submitForm}>
        <div className="input-item">
            <label htmlFor="itemName">Item Name</label>
            <input type="text"onChange={inputHandler}  id='itemName' name='itemName' autoComplete='off' placeholder='Item Name'/>
        </div>

        <div className="input-item">
            <label htmlFor="quantity">Quantity</label>
            <input type="number"onChange={inputHandler} min={1}  id='quantity' name='quantity' autoComplete='off' placeholder='Quantity'/>
        </div>

        <div className="input-item">
            <label htmlFor="price">Price</label>
            <input type="number"onChange={inputHandler} min={1} id='price' name='price' autoComplete='off' placeholder='Price'/>
        </div>

        <div className="input-item">
            <label htmlFor="description">Description</label>
            <input type="text"onChange={inputHandler}  id='description' name='description' autoComplete='off' placeholder='Description'/>
        </div>

        <div className="input-item">
            <label htmlFor="category">Category</label>
            <input type="text" onChange={inputHandler} id='category' name='category' autoComplete='off' placeholder='category'/>
        </div>

        <div className="input-item">
            <button type='submit'>ADD ITEM</button>
        </div>
      </form>
    </div>
  )
}

export default AddItem;
