import "./App.css"
import Header from "./Components/Header";
import Howitwork from "./Components/Howitwork"
import Agent from "./Components/Agent"
import Properties from "./Components/Properties"


export default function  App()
{
   
    
    return (
        <>
    <div className="App">
         
        <Header/>
        <Howitwork/>
        
        <Agent/>
        <Properties/>
    </div>
    
     </>
    );
}