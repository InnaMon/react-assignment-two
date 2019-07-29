import React from 'react';

const CharComponent = (props) => {
    const style = {
        display: 'inline-block',
        textalign: 'center',
        border: '3px solid pink',
        background: 'lightblue',
        padding: '16px',
        margin: '16px',
        cursor: 'pointer'
      };

    return(
      <div style={style}>
        <p onClick={props.click}>{props.letter}</p>
      </div>
    );
}

export default CharComponent;