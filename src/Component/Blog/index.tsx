import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchData,
  selectData,
  selectLoading,
  selectError,
} from '../../action/Apiaction'
import { IDataItem } from '../../Shared/Interfaces'
import Card from '../Card'
import './index.scss'
import Blackbtn from '../Button/Blackbtn'

interface IDiscoverItems {
  name: string
  to: string
}
const items: IDiscoverItems[] = [
  {
    name: 'Programming',
    to: '',
  },
  {
    name: 'Data Science',
    to: '',
  },
  { name: 'Technology', to: '' },
  {
    name: 'Self Improvemnet',
    to: '',
  },
  { name: 'Writing', to: '' },
  {
    name: 'Relationship',
    to: '',
  },
  {
    name: 'Machine Learning',
    to: '',
  },
  {
    name: 'Productivity',
    to: '',
  },
  {
    name: 'Politics',
    to: '',
  },
]

const Blog: React.FC = () => {
  const dispatch = useDispatch()
  const data: IDataItem = useSelector(selectData)
  const loading: boolean = useSelector(selectLoading)
  const error: string = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  return (
    <div className='blog_and_discover'>
      <div className='blog_container'>
        {data.articles.map((article) => (
          <div
            className='card_img'
            onClick={() => {
              window.location.href = article.url
            }}
          >
            <Card
              key={article.title}
              heading={article.title.substring(0, 30)}
              subheading={article.description.substring(0, 50).concat('...')}
              date={'May 5'}
              time={article.publishedAt.substring(0, 10)}
            />
            <img src={article.urlToImage} width={100} />{' '}
          </div>
        ))}
      </div>
      <div className='discover_section'>
        <h4>Discover more of what matters to you</h4>
        <div className='discover_btn'>
          {items.map((item) => (
            <Blackbtn p='8px' value={item.name} />
          ))}
        </div>
        <p style={{color:'green'}}>See more topics</p>
      </div>
    </div>
  )
}

export default Blog
