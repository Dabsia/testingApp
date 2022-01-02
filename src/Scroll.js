import React from 'react';

const Scroll = (props) => {
    return (
        <div style = {{overflowY: 'scroll',margin :'auto', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    )
}

export default Scroll