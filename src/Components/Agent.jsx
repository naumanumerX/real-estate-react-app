import React from 'react'
import Agentbox from './Agentbox'
import agentimage1 from '../images/p1.jpg'
import agentimage3 from '../images/p2.jpg'
import agentimage2 from '../images/p3.jpg'
function Agent(props) {
  return (
    <div className='agent'>
 < div className='a-heading'>
            <h1>Agents</h1>
           
    </div>
    <div className="b-container">
        <Agentbox image={agentimage1} name="Nauman "/>
        <Agentbox image={agentimage2} name="Iftakhar"/>
        
        <Agentbox image={agentimage3} name="Fatima"/>
    </div>
     </div>

  )
}

export default Agent