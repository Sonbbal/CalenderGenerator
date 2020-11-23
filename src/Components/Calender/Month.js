import React from 'react';

const Month = ( props ) => {
    let typeNumber = props.type;
    let fontNumber = props.font;
    return (
        <div className="month">
            <h2 className={`size-${props.data.font.size} fonts_${props.data.font.family[fontNumber]}`}>{props.data.type[typeNumber]}</h2>
        </div>
    )
}

export default Month; 