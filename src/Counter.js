import React from 'react'

function Display(props){
    const a = [1,2,3,4,5,6]
    return (
    <div>
        <h1>
            { `Entered name is ${props.firstName} and counter is ${props.counter}`}
            {
                props.counter === 10 ?
            a.map((value, index) => <div>{value +'' + index}</div>): ""
            }
        </h1>
    </div> 
    )
}

export default Display