import React from 'react'
import { render } from 'react-dom'

const LoadingDisplay = (props) => {
return(
        <div class="ui active dimmer">
                <div class="ui big text loader"> {props.text}</div>
        </div>
  )  
}


export default LoadingDisplay