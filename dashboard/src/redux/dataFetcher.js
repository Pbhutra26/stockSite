//import {fileSnatcher} from '../App.js'
import {updateData} from './actions.js';
import store from './store.js'
const fetchData=()=>{  

        // fetch('http://localhost:9000/portfolio/get')
        // .then((response)=>response.json())
        // .then(array=>console.log(array));

        
        console.log('fetch data method is working');
        setInterval( ()=>{
        
        fetch('http://localhost:9000')
        .then(response =>  response.json())
        .then(data =>store.dispatch(updateData(data)))
        .catch(error=>console.log(error));

        // fetch('http://localhost:9000/portfolio/get')
        // .then(response =>  response.json())
        // .then(data =>console.log(data));


         },2000);
//        export {something};
        }
export  {fetchData};

