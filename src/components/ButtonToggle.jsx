import React from 'react'

export default function ButtonToggle({ children, toggleForm}){
    return(
        <button onClick={()=>{ toggleForm()}}>
            {children}
        </button>
    )
}