export const Switch = ( props ) => {
    return (
        <span className="switch-container" onClick={() => props.click()}>
            <span className={ props.on ? `switch-thumb`: `switch-thumb off`}></span>
        </span>
    )
}

export const Button = ( props) => {
    return (
        <div className="button-container" onClick={()=>props.onClick(props.select)}>
            {
                props.pressed ? 
                <span className="button-pressed">
                    {props.children}
                </span>
                :
                <span className="button-no-press">
                {props.children}
                </span>
            }
        </div>
    )
}

 export const ButtonSet = (props) => {
    const data = props.data;
    return (
        <div className="buttons-container">
            {
                data.map(
                    num => <Button 
                    key={num} 
                    onClick={props.onClick}
                    pressed={num === props.type}
                    select={num}
                    >{num}</Button>
                )
            }
        </div>
   )
}
export const Number = (props) => {
    return (
        <div className="number">
            <p>{props.num}</p>
            <span className="number-btn" onClick={() => props.handleNumber(1)}>+</span>
            <span className="number-btn" onClick={() => props.handleNumber(-1)}>-</span>
        </div>
    )
}