import React from 'react';

class SearchBar extends React.Component{

    render(){
    return(
        <div id="searchDiv">
            
            <input id="searchBar" placeholder="Search" onChange={event => {this.props.searchChange(event.target.value)}}></input>

        </div>
        )
    }
}

export default SearchBar 