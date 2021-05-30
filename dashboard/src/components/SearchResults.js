import React from 'react';
import SearchElement from './SearchElement.js';
export default function SearchResults({results}) {

      
    return (
        <div className="search-results-container" >
            <ul className="search-results">
                {results.map(name=>
                <li>{
                    <SearchElement  key={name} name={name} />
                    }</li>)}
            </ul>
            
        </div>
    )
}
