
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import SingleItem from './components/SingleItem.js';
import Products from './components/Products.js';
import Portfolio from './components/Portfolio';
import {fetchData} from './redux/dataFetcher.js';
import Alan from './hooks/useAlan.js';
function App() {



    fetchData()
    
 
 

  return (
     <Router>
        <div className="App">
        <Navbar/>
        <Alan/>
        <Switch>
               {/* <Route exact path='/landing' component={App}/> */}
               <Route  path='/' exact component={Products}></Route>
               <Route exact path='/portfolio' component={Portfolio}></Route>
               <Route exact path='/stock' component={SingleItem}></Route>
               <Route  exact path='/wlebviulvbulrbviurb' component={Alan}></Route>
        </Switch>  
        </div>
     </Router>
     
     
   
  );
}

export default App;
