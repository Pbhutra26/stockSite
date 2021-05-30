
const mongoose=require('mongoose');
const schema=mongoose.Schema;

const portfolioSchema=new schema({
    id:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true},
    name:{type:String, required:true}

    
   },{timestamps:true});

const Portfolio=mongoose.model('Portfolios',portfolioSchema);


module.exports=Portfolio;