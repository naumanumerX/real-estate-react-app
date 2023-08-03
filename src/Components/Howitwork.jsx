
export default function Howitwork() {
  return (
    <div className='how-it-works'>
        <div className='container'>
      <h2><u>Payment Currencies</u></h2>
      <p>Currently we are dealing in ethereum only.</p>
      

       <div className='flex'>
        <div>
        < span className='fab fa-ethereum' style={{ fontSize: '48px', color: 'black' }}>

            <h4>Find a House </h4>
            <p> Make payment using Etherum</p>
            
          </span>
        </div>
        
        <div>
          <span class="fa fa-bitcoin" style={{fontSize:'48px',color:'black'}}>
            <h4>Find a House</h4>
            <p>Make payment using Bitcoin</p>
          </span>
        </div>

        <div>
          <span className='fab fa-ethereum' style={{ fontSize: '48px', color: 'black' }}>
            <h4>Find a House</h4>
            <p>Make payment using <b>Ether Classic</b></p>
          </span>
        </div>



        </div>
        </div>
      </div> 
        
  )
}

