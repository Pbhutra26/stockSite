import React from 'react'
import { connect } from 'react-redux'
import Product from './Product.js'
 function Products({products,invested}) {

    if (products!==[])
    return (
        <div>
             <div className="total-invested">Total Investment={'$ '}{invested}</div>
          { products.map(product=>{return (<Product key={product.symbol} product={product}/>)})
           } 
          
        </div>
    )
    else
    return <h1 className="loading">LOADING...</h1>
}

const mapStateToProps=(state)=>{
    return{
        products:state.trade.products,
        invested:state.trade.invested,
       
    }

}
export default connect(mapStateToProps)(Products);
