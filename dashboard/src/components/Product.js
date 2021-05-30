import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import{buyStock,sellStock,viewStock,removeStock} from '../redux/actions.js'
 function Product({product,buyStock,sellStock,removeStock,viewStock}) {
    const stockName=product.longName;
    const stockPrice=product.regularMarketPrice;
  const [inputQuantity, setInputQuantity] = useState(0);

   const change=product.regularMarketChange;
 const priceColor=change<0?'product-price-red':'product-price-green';
  
    return (
        <div className="product-container">
            <h3 className="product-heading">{stockName} </h3>
            <h3 className={priceColor}>{stockPrice}</h3>
            <div className="btn-container">
                <input type="number" className="quantitty" placeholder="" min={1} onChange={(e)=>setInputQuantity(e.target.value)}></input>
                <button onClick={ ()=>{
                 buyStock(product.symbol,inputQuantity)
    }} className="btn-buy">Buy</button>
                <button onClick={()=>{sellStock(product.symbol,inputQuantity)
                removeStock()}} className="btn-sell">Sell</button>
            </div>
               
            <Link  onClick={()=>viewStock(product.symbol)} to='/stock'>
            <button className="view">Details</button>
            </Link>
        </div>
        
    )
}
const mapDispatchToProps=(dispatch)=>{
    return {
          buyStock:(id,qty)=>
          {
              dispatch(buyStock(id,qty))
          },
          sellStock:(id,qty)=>{
              dispatch(sellStock(id,qty));
          },
          removeStock:()=>{
              dispatch(removeStock())
          },
          viewStock:(id)=>{
              dispatch(viewStock(id))
          }
    }

}




export default connect(null,mapDispatchToProps)(Product);
