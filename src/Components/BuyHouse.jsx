import React from 'react'

function BuyHouse(props) {
  return (
    <div className="p-box">
        <img src={props.image} alt='product'/>
        <div className="p-heading">
            <h3>House {props.id}</h3>
            <p>Owner:{props.name}</p>
            <p>Address:{props.adrress}</p>
            <a href="#" className='price'>Price: {props.price}</a>
            <p>Area: {props.area}</p>
            
            <br />
            
            <a href="#" className='buy-btn'>Buy</a>
            
        </div>

        
        
        </div>
  )
}

export default BuyHouse