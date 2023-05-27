import './index.scss'
import Card from '../Card'

export interface ITrendingprops {
  id?: string
  heading: string
  subheading: string
  date: string
  time: string
}

const Trendingdata: ITrendingprops[] = [
  {
    id: '01',
    heading: 'Matty Brownell in UX Collective',
    subheading: 'How I used Midjourney to design a brand identity',
    date: 'May 5',
    time: '5 min read',
  },
  {
    id: '02',
    heading: 'Matty Brownell in UX Collective',
    subheading: 'How I used Midjourney to design a brand identity',
    date: 'May 5',
    time: '5 min read',
  },
  {
    id: '03',
    heading: 'Matty Brownell in UX Collective',
    subheading: 'How I used Midjourney to design a brand identity',
    date: 'May 5',
    time: '5 min read',
  },
  {
    id: '04',
    heading: 'Matty Brownell in UX Collective',
    subheading: 'How I used Midjourney to design a brand identity',
    date: 'May 5',
    time: '5 min read',
  },
  {
    id: '05',
    heading: 'Matty Brownell in UX Collective',
    subheading: 'How I used Midjourney to design a brand identity',
    date: 'May 5',
    time: '5 min read',
  },
  {
    id: '06',
    heading: 'Matty Brownell in UX Collective',
    subheading: 'How I used Midjourney to design a brand identity',
    date: 'May 5',
    time: '5 min read',
  },
]

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
