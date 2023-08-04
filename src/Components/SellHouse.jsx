import React from 'react'

function SellHouse(props) {
  return (
    <div className="p-box">
        <h3>Sell A House</h3>
        <img src={props.image} alt='product'/>
        <div className="p-heading">
             
            <h3>House {props.id}</h3>
            <p>Owner:{props.name}</p>
            <p>Address:{props.adrress}</p>
            
            <a href="#" className='price'>Area: {props.area}</a>
            <br />
            
            <a href="#" className='buy-btn'>Sell</a>
            
        </div>

        
        
        </div>
  )
}

export default SellHouse;