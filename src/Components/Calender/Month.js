import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
    font-size: ${props => 1+(props.fontSize*0.2)}rem;
    font-family: ${props => props.font}
`;

const Month = ( props ) => {
    return (
        <div className="month">
            <Header 
                font={props.font} 
                fontSize={props.fontSize}
            >{props.month}</Header>
        </div>
    )
}

export default Month; 