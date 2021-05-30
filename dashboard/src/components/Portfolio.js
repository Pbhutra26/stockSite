import React from 'react'
import { connect } from 'react-redux';
import PortfolioComponent from './PortfolioComponent'

function Portfolio({portfolio,invested,products}) {

 

    return (
        <div>
              <div className="total-invested">Total Investment={'$ '}{invested}</div>
        {
             portfolio.map(portfolioElement=>{return (<PortfolioComponent key={portfolioElement.symbol} portfolioElement={portfolioElement} products={products}/>)})
        }
       
           
        
         
      </div>
        )
    
}
const mapStateToProps=state=>{
    return{portfolio:state.trade.portfolio,
        invested:state.trade.invested,
        products:state.trade.products
    }
    
}
export default connect(mapStateToProps)(Portfolio);