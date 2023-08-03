import BuyHouse from "./BuyHouse";
import SellHouse from "./SellHouse";
import pimage1 from '../images/header-a.jpg';
import pimage2 from '../images/header-I.jpg';
import pimage3 from '../images/header-f.jpg';
import pimage4 from '../images/header-b.jpg';
import pimage5 from '../images/header-5.jpg';
import pimage6 from '../images/header-6.jpg';
import pimage7 from '../images/header-7.jpg';
import pimage8 from '../images/header-8.jpg';


export default function Properties () {
  return (
    <div className="product">
    <div className="p-heading">
        <a href="#"><h3>Buy/Sell </h3></a>
        
        <p>Select the house to buy /sell</p>
     
    </div>
    <div className="product-container">

        <BuyHouse id={1} image={pimage1} name="Nauman" adrress="123,ladymargret,southall" price ="10,999 ethers" area="90x31"></BuyHouse>
        <BuyHouse id={2} image={pimage2} name="ifitkhar" adrress="41,cricklewood"price ="9,999 ethers" area="43x78"></BuyHouse>
        <BuyHouse id={3}image={pimage3} name="Fatima" adrress="67,edgware"price ="8,999 ethers" area="11x34"></BuyHouse>
        <BuyHouse id={4}image={pimage4} name="Bilal" adrress="89,wembly" price ="7,999 ethers" area="23x67"></BuyHouse>
     
        
        
        
        <SellHouse id={1} image={pimage5} name="Nauman" adrress="56 ,main,Waterloo" area="23x67"></SellHouse>
        <SellHouse id={2} image={pimage6} name="ifitkhar" adrress="88,st 2,Guilford"area="11x34"></SellHouse>
        <SellHouse id={3}image={pimage7} name="Fatima" adrress="67 Avenue, Hounslow" area="43x78"></SellHouse>
        <SellHouse id={4}image={pimage8} name="Bilal" adrress="1 ,lady margret road,hayes"area="90x31" ></SellHouse>
    </div>
    </div>
  )
}

