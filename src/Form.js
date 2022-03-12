import React  from 'react'
const Form=(props)=>{
    return(
    <div>
    <button onClick={props.onclickHandler}> +</button>
    <button onClick={props.onclickHandler1}>-</button>
    </div>
    )
}

export default Form;