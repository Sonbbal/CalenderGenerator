import React from 'react';
import styled from 'styled-components';

const AWeek = styled.div`
    font-size:${props => 1 + (props.fontSize*0.05)}rem;
    font-family:${props => props.font}
`;

const Week = (props) => {
    const data = props.data;
    return (
        <div className={`week`}>
            {
                data.map( 
                    data => <AWeek 
                    key={data}
                    font={props.font} 
                    fontSize={props.fontSize}
                    >{data}</AWeek>)
            }
        </div>
    )
}

export default Week;