import React from 'react'

export default function FormToggle({ children, currentIndex}){
    if(Array.isArray(children)){
        return(
            <div>
                {children[currentIndex]}
            </div>
        )
    }
    return null
}