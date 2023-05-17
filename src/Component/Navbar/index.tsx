import { Link } from 'react-router-dom'
import Blackbtn from '../Button/Blackbtn'
import './index.scss'
const Navbar: React.FC = () => {
  return (
    <nav className='nav_container'>
      <img src='logo.svg' alt='logo_pic' width={170} />
      <ul>
       <Link className='link' to={'/ourstory'}>Our Story</Link>
       <Link className='link'  to={'/membership'}>Membership</Link>
       <Link  className='link' to={'/write'}>Write</Link>
       <Link  className='link' to={'/signin'}>Sign in</Link>
      <Blackbtn value='Get started' p='13px 15px' />
      </ul>
    </nav>
  )
}
export default Navbar
