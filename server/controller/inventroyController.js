import Inventory from '../modules/inventoryModule.js'

export const create =async (req,res)=>{
    try{
        const inventoryData=new Inventory(req.body);

        if(!inventoryData){
            return res.status(404).json({msg:"Inventory data not found"});
        }

        const savedData=await inventoryData.save();
        res.status(200).json({savedData,msg:"Item created successfully"});

    }catch (err){
        res.status(500).json({error:err});
    }
}


export const getAll=async(req,res)=>{
    try {
        const inventoryData=await Inventory.find();
        if(!inventoryData){
           return res.status(404).json({msg:"Inventory data not found"})
        }
        res.status(200).json(inventoryData);
        
    } catch (err) {
        res.status(500).json({error:err})
    }
}


export const getOne=async (req,res)=>{
    try {
        const id=req.params.id;
        const inventoryExit=await Inventory.findById(id);
        if(!inventoryExit){
            return res.status(401).json({msg:'Inventory data not found'})
        }

        res.status(200).json(inventoryExit);

    } catch (err) {
        res.status(500).json({error:err})
    }
}



export const update=async(req,res)=>{
    try {
        const id=req.params.id
        const getData=await Inventory.findById(id)
        if(!getData){
            return res.status(401).json({msg:"Inventory data not found"})
        }

        const updatedData=await Inventory.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updatedData)

        
    } catch (err) {
        res.status(500).json({error:err})
        
    }
}



export const deleteData=async(req,res)=>{
    try {
        const id=req.params.id
        const getData=await Inventory.findById(id)
        if(!getData){
            return res.status(404).json({msg:"Inventory Data Not Exits"})
        }

        await Inventory.findByIdAndDelete(id);
        res.status(200).json({msg:"Inventory data deleted successfully"})
    } catch (err) {
        res.status(500).json({error:err})
    }
}