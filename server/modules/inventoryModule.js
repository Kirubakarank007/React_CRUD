import mongoose from 'mongoose'

const inventorySchema=mongoose.Schema({
    itemName:{
        type:String,
        required:true,
        trim:true
    },
    quantity:{
        type:Number,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:false,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    }
})



module.exports=mongoose.model("Inventory",inventorySchema)