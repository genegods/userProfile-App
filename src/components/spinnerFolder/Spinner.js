import { yieldExpression } from '@babel/types'
import React from 'react'
import spinnerImage from '../../asserts/spinners/yin.gif'

const Spinner = () => {
    return (
        <React.Fragment>
            <div className='spinnerPage centered'>
                <img src = {spinnerImage} alt='' width='200' height='200'/>
            </div>
        </React.Fragment>
            
        
    )
}

export default Spinner
