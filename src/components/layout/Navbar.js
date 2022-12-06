import './Navbar.component.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <ul className='containerNavbar'>
          <li>
            <Link to='/'> Home </Link>
          </li>

          <li>
            <Link to='/empresa'> Empresa </Link>
          </li>

          <li>
            <Link to='/contato'> Contato </Link>
          </li>
        </ul>
    )
}

export default Navbar