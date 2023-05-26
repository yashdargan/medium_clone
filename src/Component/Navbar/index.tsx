import { Link } from 'react-router-dom'
import Blackbtn from '../Button/Blackbtn'
import './index.scss'
interface IMeanulist {
  name: string
  to: string
}

const menu: IMeanulist[] = [
  {
    name: 'Our Story',
    to: '/ourstory',
  },
  {
    name: 'Membership',
    to: '/membership',
  },
  {
    name: 'Write',
    to: '/write',
  },
  {
    name: 'Sign in',
    to: '/signin',
  },
]

const Navbar: React.FC = () => {
  return (
    <nav className='nav_container'>
      <img src='logo.svg' alt='logo_pic' width={170} />
      <ul>
        {menu.map(({ name, to }) => (
          <>
            <Link className='link' to={to}>
              {name}
            </Link>
          </>
        ))}
        <Blackbtn value='Get started' p='13px 15px' />
      </ul>
    </nav>
  )
}
export default Navbar
