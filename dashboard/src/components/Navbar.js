import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {search,makeNode,add} from '../trie.js'
import { connect } from 'react-redux';
import SearchResults from './SearchResults.js';


 function Navbar({products,isClicked}) {
    
    const root=new makeNode('\0');
    products.forEach(element => {
        add(element.longName,0,root);
    });
    
    const[suggestionList, setSuggestionList] = useState([]);
    const clearSuggestions=()=>{
        setSuggestionList([]);
    }
 
    return (
        <div className="nav-bar" onClick={clearSuggestions}>
           <Link style={{textDecoration:'none',color:'whitesmoke',alignSelf:'flex-start',fontWeight:'lighter',marginLeft:'10px'}} to='/' >
               <h3>Dashboard</h3>
           </Link>
           <input className="search-bar" type="search" placeholder="Search a stock" onChange={ e=>{
     
              setSuggestionList(e.target.value!==""?search(e.target.value,0,root):[]);
             // put code to do here 
            

           }}/>

           <SearchResults  results={suggestionList}/>
           
           
             
           <Link className="portf" style={{textDecoration:'none',color:'whitesmoke',fontWeight:'lighter',position:'absolute', right:'2vw'}} to="/portfolio">
               <h3>Go to portfolio</h3>
           </Link>
        </div>
    );
};

const mapStateToProps=state=>{
    return{
        products:state.trade.products,
        
    }
    
}
export default connect(mapStateToProps)(Navbar);