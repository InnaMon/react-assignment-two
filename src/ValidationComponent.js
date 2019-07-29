import React from 'react';

const ValidationComponent = (props) => {
    let validation = (<p>Text too short!</p>);
    if (props.total >= 5) {
        validation = (
            <p>Text long enough!</p>
        )
    }

    return (
        <div>
          <p>Length of text: {props.total}</p>
          {validation}
        </div>
    );
}

export default ValidationComponent;