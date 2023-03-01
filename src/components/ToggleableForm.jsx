import React, { createElement, useState } from 'react'
import ButtonToggle from './ButtonToggle'
import FormToggle from './FormToggle'

export default function ToggleableForm({ props }){
    const [currentForm, setCurrentForm] = useState(0)

    return(
        <>
        {
            props.map((el, index) =>{
                return <ButtonToggle key={`button${index}`} 
                        toggleForm ={()=>{
                            setCurrentForm(index)
                        }}>{el.name}</ButtonToggle>
            })
        }

        <FormToggle currentIndex={currentForm}>
            {
                props.map((el, index) =>{
                    return <div key={`form${index}`}>
                        {createElement(el.component)}
                    </div>
                })
            }
        </FormToggle>
        </>
    )
}