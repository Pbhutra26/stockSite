const express=require('express');
const router=express.Router();
const Portfolio=require('../models/portfolioModel');


router.post('/post/:id',(req,res)=>{
    const portfolio=new Portfolio({
        id:req.params.id,
        price:req.body.price,
        quantity:req.body.quantity,
        name:req.body.name
    })
    portfolio.save().then(()=>res.send('done')).catch(()=>console.log('error'));
    console.log('post request connection done');
})

router.get('/get',(req,res)=>{
    Portfolio.find()
    .then((portfolios)=> res.json(portfolios))
    .catch(()=>console.log('error'));
    ;
    console.log('get request connection done');
})

router.get('/get/:id',(req,res)=>{
    Portfolio.findOne({id:req.params.id})
    .then((portfolios)=> {
        if(!portfolios)
        res.send('Query Unsuccesful')
        else
        res.json(portfolios)
    })
    .catch(()=>console.log('error'));
    ;
    console.log('get singular request connection done');
})

router.patch('/patch/:id',(req,res)=>{
    Portfolio.findOne({id:req.params.id})
    .then((stock)=> {
        console.log(req.body.price);
        stock.price=req.body.price;
        stock.quantity=req.body.quantity;
        stock.name=req.body.name;

        
        stock.save()
        .then(()=>res.send('patched succesfully!'))
        .catch((err)=>console.log(err));
        
    })
    .catch(()=>console.log('error'));
    ;
    console.log('patch request connection done');
})

module.exports=router;