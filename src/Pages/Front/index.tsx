import Blackbtn from '../../Component/Button/Blackbtn'
import Navbar from '../../Component/Navbar'
import Trending from '../../Component/Trending'
import './index.scss'
import Blog from '../../Component/Blog'

const Front: React.FC = () => {

  return (
    <>
      <Navbar />
      <main>
        <div className='front_container'>
          <div className='big_font'>Stay curious.</div>
          <div className='show_msg'>
            Discover stories, thinking, and expertise from writers on any topic.
          </div>
          <Blackbtn value='Start reading' p='13px 50px' />
        </div>
        <img id='style1' src='style2.svg' width={600} />
      </main>
      <Trending />
      <Blog />
    </>
  )
}
export default Front
