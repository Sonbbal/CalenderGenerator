export const Switch = () => {
    return (
        <span className="switch-container">
            <span className="switch-thumb"></span>
        </span>
    )
}

export const Button = ( props ) => {
    return (
        <div className="button-container">
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

// export const Radio = () => {
//     const arr = [1,2,3,4,5,6]
//     return (

//     )
// }