  import Header from "./Header"
  import logo from '../images/logo1.png'

  export default function Navbar () {
    return (
      <nav>
      <a href='#' className='logo'>
          <img src={logo} alt='logo'/>
      </a>
    <input className='menu-btn' type='checkbox' id='menu-btn'/>
    <label className='menu-icon' for='menu-btn'>
      <span className='nav-icon'></span>
    </label>

    <ul className='menu'>
      <li><a href="#" className="active"> Home</a></li>
      <li><a href="#" > About</a></li>
      <li><a href="#" >Buy House</a></li>
      <li><a href="#" > Sell House</a></li>
      
    </ul>
  
    </nav>
    )
  }

  