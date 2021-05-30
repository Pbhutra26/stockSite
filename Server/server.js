const express = require('express')
const app = express();
const si = require('stock-info');
const port = 9000;
const cors =require('cors');
const mongoose=require('mongoose');
const password='Pratham1';

mongoose.connect('mongodb+srv://Prathamesh:'+password+'@cluster0.o2tdz.mongodb.net/AuroTrades?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Connected to DB'))
.catch(()=>console.log('Error connecting to DB'));


// var stockList=[
//   'EICHERMOT.NS',  'JSWSTEEL.NS',
// 'HINDALCO.NS',   'TATASTEEL.NS',  'BAJFINANCE.NS',
// 'TATAMOTORS.NS', 'BAJAJ-AUTO.NS', 'SUNPHARMA.NS',
// 'AXISBANK.NS',   'TECHM.NS',      'CIPLA.NS',
// 'INDUSINDBK.NS', 'GRASIM.NS',     'WIPRO.NS',
// 'INFY.NS',       'HCLTECH.NS',    'BRITANNIA.NS',
// 'HINDUNILVR.NS',  'DRREDDY.NS','TITAN.NS','LT.NS','SHREECEM.NS',
// 'HDFC.NS',       'BHARTIARTL.NS', 'ULTRACEMCO.NS',
// 'DIVISLAB.NS',   'TCS.NS',        'ASIANPAINT.NS',
// 'SBIN.NS',       'ICICIBANK.NS',  'NTPC.NS',
// 'NESTLEIND.NS',  'BAJAJFINSV.NS', 'BPCL.NS',
// 'COALINDIA.NS',  'POWERGRID.NS',  'HDFCBANK.NS',
// 'RELIANCE.NS',   'MARUTI.NS',     'UPL.NS',
// 'ITC.NS',        'HEROMOTOCO.NS', 'ADANIPORTS.NS',
// 'GAIL.NS',       'KOTAKBANK.NS',  'IOC.NS',
// 'HDFCLIFE.NS',   'ONGC.NS',       'SBILIFE.NS'
// ];
var stockList=[
  'AAPL','MSFT','FB','GOOG','BABA','TSLA','NVDA','INTC','CRM','AMD','PYPL','EA','MTCH','ZG'
];


 
  app.use(cors());
  app.use(express.json());

  app.get('/', function (req, res) {
    res.header("Content-Type",'application/json');
    si.getStocksInfo(stockList).then((stockData)=>res.send(stockData)).catch(err=>console.log('error'));
    
  });

  const portfolioRouter=require('./routers/portfolios');

app.use('/portfolio',portfolioRouter);
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
