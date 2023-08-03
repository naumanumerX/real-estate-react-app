import Navbar from "./Navbar"

function  Header() {
  return (

    <div className="header">
        <Navbar/>
        <div className="intro">
         <b><u>Looking For a House</u></b> 
        <h1><span>Buy</span> &<span>Sell</span>Using Ethereum  
        </h1>
        <p className="details">With Ethereum's blockchain technology, we have created a secure and transparent platform that simplifies the process for both buyers and sellers. Through our platform, sellers can  represent the houses they wish to sell.On the buyer's side, they can browse through the listed properties and make purchases by sending Ether directly to the smart contract address.</p>
       <a href="#" className="header-btn">Details</a>
        </div>
    </div>
  )
}

export default Header;