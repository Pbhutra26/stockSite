import React from 'react'
import {connect} from 'react-redux';
import { viewStock} from '../redux/actions.js';
import {Link} from 'react-router-dom';
 function SearchElement({products,name,viewStock,isClicked}) {
       const symbol=products.find(element=>element.longName===name).symbol;
       function handle(e){
           viewStock(symbol);
        //    isClicked();
       }
    return (

       
       <div  className="search-element">
           <Link className="search-link" to='/stock/' onClick={handle}>  
            {name}
           </Link>
        </div>
     
       
    )
}
const mapStateToProps=state=>{
    return{
        products:state.trade.products
    }
    
}
const mapDispatchToProps=dispatch=>{
    return{
       
        viewStock:(id)=>{
            dispatch(viewStock(id))
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(SearchElement);