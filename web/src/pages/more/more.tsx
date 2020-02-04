import React from 'react'
import './more.css'
import { render } from '@testing-library/react'
import ReactDom from 'react-dom'

const handClick=function(){
    let Click = document.getElementById('click') as HTMLButtonElement;
    Click.style.color = "yellow"
}

function More (){
    
    return(
        <div className="Main">
            <button onClick={handClick} id="click">click</button>
        </div>
    )
}

export default More