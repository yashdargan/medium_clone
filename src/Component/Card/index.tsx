import { ITrendingprops } from "../Trending"
import './index.scss'
const Card: React.FC<ITrendingprops> = ({
  id,
  heading,
  subheading,
  date,
  time,
}) => {
  return (
    <div className='card_container'>
      <div className='card_divider'>
        <aside className='card_no'>0{id}</aside>
        <div className='card_info'>
          <header className='card_heading'>{heading}</header>
          {subheading}
       
        <footer className='card_footer' >
          {date}.{time}
        </footer>
        </div>
      </div>
    </div>
  )
}

export default Card
