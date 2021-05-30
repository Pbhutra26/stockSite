import React from 'react';
import { connect } from 'react-redux';

 function SingleItem({currentProduct}) {
    const name=currentProduct.longName;
    const price=currentProduct.regularMarketPrice;
    // const change=currentProduct.regularMarketChange;
    // const changePercent=currentProduct.regularMarketChangePercent;
    const dayHigh=currentProduct.regularMarketDayHigh;
    const dayLow=currentProduct.regularMarketDayLow;
    const previousClose=currentProduct.regularMarketPreviousClose;
    const openPrice=currentProduct.regularMarketOpen;
    const fiftyTwoWeekHigh=currentProduct.fiftyTwoWeekHigh;
    const fiftyTwoWeekLow=currentProduct.fiftyTwoWeekLow;
    const forwardPE=currentProduct.forwardPE;
   

    let predictedValue=price+0.1*(Math.random()>0.5?Math.random()*price:-1*Math.random()*price);
    predictedValue=Math.floor(predictedValue*10)/10;
    
    return (
        <div className="si-container">
            <div className="column-box"> <div className="column-box-item"><h1>{name}</h1></div>
           <div className='column-box-item'>
               <div ><h2>Current price: ${price}</h2></div>
               <div ><h2>Projected Closing: ${predictedValue}</h2></div>

           </div>
           </div>
{/* 
           <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'gray'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240} }
      />
           


       
           
           {/* <div className="si-change-percent">{changePercent}</div> */}
           <div className="column-box">

                <div className="detail-box">
                    <div className="si-day-high">Day high :{dayHigh}</div>
           <div className="si-day-low">Day low : {dayLow}</div>
           </div>

           <div className="detail-box">
               <div className="si-previous-close">Previous Close : {previousClose}</div>
           <div className="si-open-price">Open Price : {openPrice}</div>
           </div>

           <div className="detail-box">
               <div className="si-fifty-two-week-high">52 Week high : {fiftyTwoWeekHigh}</div>
           <div className="si-fifty-two-week-low">52 week low : {fiftyTwoWeekLow}</div>
           </div>
           <div className="detail-box-last">
               <div className="si-forwardPE">P/E ratio : {forwardPE} </div>
           </div>
           </div>
           
          
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        currentProduct:state.trade.currentProduct
    }
}
export default connect(mapStateToProps)(SingleItem);