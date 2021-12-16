import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Singlecontent from './Singlecontent'
import './Trending.css'
import Pages from './Pages'

const Trending = () => {
  const [page, setPage] = useState(1)

  const [content, setContent] = useState([])

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=0334b1896d217d467996edf3a97e7704&page=${page}`
    )

    // console.log(data.results)

    setContent(data.results)
  }

  useEffect(() => {
    fetchTrending()
  }, [page])

  return (
    <div className='trendingMain'>
      <span className='pageTitle'>Trending</span>
      <div className='trending'>
        {content &&
          content.map((c) => (
            <Singlecontent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <Pages setPage={setPage} />
    </div>
  )
}

export default Trending
