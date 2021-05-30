import {useEffect,useState,useCallback} from 'react'
import alanBtn from "@alan-ai/alan-sdk-web";
import {buyStock,sellStock,viewStock} from '../redux/actions.js';
import store from '../redux/store.js';
import {useHistory} from 'react-router-dom';
export default function Alan() {
const history=useHistory();
    
    
    var stockList={
        'Apple': 'AAPL',
        'Microsoft':'MSFT',
        'Facebook':'FB',
        'Alphabet':'GOOG',
        'Google':'GOOG',
        'Alibaba':'BABA',
        'Tesla':'TSLA',
        'Nvidia':'NVDA',
        'Intel':'INTC',
        'Salesforce':'CRM',
        'Advanced Micro Devices':'AMD',
        'Paypal':'PYPL',
        'Electronics art':'EA',
        'EA':'EA',
        'Match group':'MTCH',
        'Zillow group':'ZG'
       };
    const [alanInstance, setAlanInstance] = useState();

    const buyStockAlan=useCallback(({detail:{name,quantity}})=>{
        store.dispatch(buyStock(stockList[name],quantity));
        alanInstance.playText(`Buying ${quantity} stocks of ${name}`);
        history.push('/portfolio')
    },[alanInstance,buyStock,stockList]);
    const sellStockAlan=useCallback(({detail:{name,quantity}})=>{
        console.log(stockList[name]);
        alanInstance.playText(`Selling ${quantity} stocks of ${name}`);
        store.dispatch(sellStock(stockList[name],quantity));
        
        history.push('/portfolio')
      },[stockList,alanInstance,sellStock]);


    const viewStockAlan=useCallback(({detail:{name}})=>{
        store.dispatch(viewStock(stockList[name]))
        history.push('/stock');
      },[alanInstance,viewStock,stockList]);

    const openDashboardAlan=useCallback(()=>{
        history.push('/');
        
      },[alanInstance,history]);
    const openPortfolioAlan=useCallback(()=>{
        history.push('/portfolio');
        console.log(history)
      },[alanInstance,history]);
    
    useEffect(() => {
     window.addEventListener('BUY',buyStockAlan);
     window.addEventListener('SELL',sellStockAlan);
     window.addEventListener('VIEW',viewStockAlan);
     window.addEventListener('OPEN-PORTFOLIO',openPortfolioAlan);
     window.addEventListener('OPEN-DASHBOARD',openDashboardAlan);

     return ()=>{
         window.removeEventListener('BUY',buyStockAlan);
         window.removeEventListener('SELL',sellStockAlan);
         window.removeEventListener('VIEW',viewStockAlan);
         window.removeEventListener('OPEN-PORTFOLIO',openPortfolioAlan);
         window.removeEventListener('OPEN-DASHBOARD',openDashboardAlan);
     }
        
    }, [buyStockAlan,sellStockAlan,viewStockAlan,openPortfolioAlan,openDashboardAlan])
    


    useEffect(() => {

        if(alanInstance!=null) return;

        setAlanInstance(alanBtn({ 
            key: 'c0558ab0ae1d903f14cf002e918a2eae2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({command,payload}) => {
                
                window.dispatchEvent(new CustomEvent(command,{detail:payload}));
            }
          }))
    }, [alanInstance])
    return (
      null
    );
}
