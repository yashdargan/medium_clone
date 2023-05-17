import './index.scss'

interface ITrendingprops {
  id: number
  heading: string
  subheading: string
  date: string
  time: string
}

const Trendingdata: ITrendingprops[] = [
   {
    id: 1,
    heading: 'Matty Brownell in UX Collective',
    subheading: 'How I used Midjourney to design a brand identity',
    date: 'May 5',
    time: '5 min read',
  },
{
    id: 2,
    heading: 'Matty Brownell in UX Collective',
    subheading: 'How I used Midjourney to design a brand identity',
    date: 'May 5',
    time: '5 min read',
  },
{
    id: 3,
    heading: 'Matty Brownell in UX Collective',
    subheading: 'How I used Midjourney to design a brand identity',
    date: 'May 5',
    time: '5 min read',
  },
{
    id: 4,
    heading: 'Matty Brownell in UX Collective',
    subheading: 'How I used Midjourney to design a brand identity',
    date: 'May 5',
    time: '5 min read',
  },
{
    id: 5,
    heading: 'Matty Brownell in UX Collective',
    subheading: 'How I used Midjourney to design a brand identity',
    date: 'May 5',
    time: '5 min read',
  },
{
    id: 6,
    heading: 'Matty Brownell in UX Collective',
    subheading: 'How I used Midjourney to design a brand identity',
    date: 'May 5',
    time: '5 min read',
  },
]

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

const Trending: React.FC = () => {
  return (
    <section className='front_trending'>
      <div className='trending'>
        <img src='trending_logo.svg' />
        Trending on Medium
      </div>
      <div className='card'>
        {Trendingdata.map((items) => (
          <Card
            key={items.id}
            id={items.id}
            heading={items.heading}
            subheading={items.subheading}
            date={items.date}
            time={items.time}
          />
        ))}
      </div>
    </section>
  )
}
export default Trending
