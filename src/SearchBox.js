import React from "react";

// State is the description of your App
// It is something that can change and affect our App
// They usually live in the parwnt container
// The cardlIst accepts the robots as props not as an imported array

const SearchBox = ({searchChange}) => {

    return (
        <div className="tc" >
            <input
                className="pa3 mb5 ba b--green bg-lightest-blue"
                placeholder="Search Robots"
                type='search'
                onChange={searchChange}
                style={{outline: 'none'}}
            />
        </div>
    )
}


export default SearchBox;
