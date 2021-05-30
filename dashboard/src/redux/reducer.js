import * as actionTypes from './types.js';
const initialState={
    products:[],
    portfolio:[],
    currentProduct:{},
    invested:0,
    portfolioValue:0,
    isClicked:false
}
const shopReducer=(state=initialState,action)=>{


    switch(action.type)
    {
        case actionTypes.BUY:
            
            const item=state.products.find(prod=>prod.symbol===action.payload.id)
            const inPortfolio=state.portfolio.find(item=>item.symbol===action.payload.id?true:false);
            const quant=parseInt(action.payload.qty)
            console.log(action.payload.qty);
            if(quant===0)
            {
                alert('Please add quantity');
                return state;
            }
            const price=item.regularMarketPrice;
        return{
                 ...state,
                 portfolio:inPortfolio?
                 state.portfolio.map(
                     (i)=>
                     i.symbol===action.payload.id?
                     {...i,quantity:i.quantity+quant,
                    }:i):
                     [...state.portfolio,{...item,quantity:quant}],
                     invested:state.invested+quant*price
        };
        case actionTypes.SELL:
            const currentItem=state.products.find(prod=>prod.symbol===action.payload.id)
            const inPort=state.portfolio.find(item=>item.symbol===action.payload.id?true:
                 false);
           
            const p=currentItem.regularMarketPrice;
            const q=parseInt(action.payload.qty);
            console.log(q);
              if(q===0)
            {
                alert('Please add quantity');
                return state;
            }
            // if(q>0)
            // {
            //     alert('Please add quantity');
            //     return state;
            // }
            
            return{
            ...state,
                 portfolio:inPort?
                 state.portfolio.map(
                     (i)=>
                     i.symbol===action.payload.id&&
                     i.quantity>=q?
                     {...i,quantity:i.quantity-q}
                     :handleQuantityDeficit(i)
                     )
                     :state.portfolio,
                     invested:state.invested-p*q>=0?state.invested-p*q:state.invested
        }
        case actionTypes.REMOVE:

            return{
            ...state,
                   portfolio: state.portfolio.filter((i)=>i.quantity!==0)
            }
        case actionTypes.VIEW:
            const curr=state.products.find(item=>action.payload.id===item.symbol)
            return{...state,
               currentProduct:curr}
        case actionTypes.UPDATE:

            return{
               ...state,
               products:action.payload
            }
        case actionTypes.CLICKED:

                return{
                   ...state,
                      isClicked:!state.isClicked
                }
   
              
        default:return state;
    }
};
export default shopReducer;


const handleQuantityDeficit=(i)=>{
   
    return i;
}

