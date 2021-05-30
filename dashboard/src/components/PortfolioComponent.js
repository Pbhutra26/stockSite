
import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import{buyStock,sellStock,viewStock,removeStock} from '../redux/actions.js'

 function PortfolioComponent({portfolioElement,products,buyStock,sellStock,removeStock,viewStock}) {


    const[inputQuantity, setInputQuantity]=useState(0);
      
    
    const stockName=portfolioElement.longName;
    const buyPrice=portfolioElement.regularMarketPrice;
    const quantity=portfolioElement.quantity;
    const stockPrice=products.find(e=>portfolioElement.symbol===e.symbol).regularMarketPrice;
    const priceColor=stockPrice-buyPrice<0?'product-price-red':'product-price-green';
   
       
    return (
        <div className="product-container">
        <h3 className="product-heading">{stockName} </h3>

        <div className="portfolio-price-container" >

        <h4 className={priceColor}> Cost Price : {buyPrice}</h4>

        </div>
    
        <span className="quantity-display">Stock qty{' : '}{quantity}</span>
        <div className="btn-container">
            <input type="number" className="quantitty" placeholder="" min={1} onChange={(e)=>setInputQuantity(e.target.value)}></input>
            <button onClick={ ()=>{
                                    buyStock(portfolioElement.symbol,inputQuantity)
                                   }} className="btn-buy">Buy</button>
            <button onClick={()=>{               
                                   sellStock(portfolioElement.symbol,inputQuantity)
                                   removeStock()
                                   }
                                   } className="btn-sell">Sell</button>
        </div>
        
        <Link onClick={()=>viewStock(portfolioElement.symbol)} to="/stock">
        <button className="view">Details</button></Link>
    </div>
    )
}
const mapDispatchToProps=dispatch=>{
    return{
        buyStock:(id,qty)=>{
            dispatch(buyStock(id,qty))
        },
        sellStock:(id,qty)=>{
            dispatch(sellStock(id,qty))
        },
        removeStock:()=>{
            dispatch(removeStock())
        },
        viewStock:(id)=>{
            dispatch(viewStock(id))
        }
    }

}
export default connect(null,mapDispatchToProps)(PortfolioComponent);




