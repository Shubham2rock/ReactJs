import { Badge } from '@mui/material'
import React from 'react'
import { img_300, unavailable } from './config'
import './Singlecontent.css'
import ContentModal from './ContenModal'

const Singlecontent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average ? vote_average : '0'}
        color={vote_average > 7 ? 'primary' : 'secondary'}
      />
      <img
        className='poster'
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className='title'>{title} </b>
      <span className='subTitle'>
        {media_type === 'tv' ? 'TV series' : 'Movie'}
      </span>
      <span className='subTitle'>{date}</span>
    </ContentModal>
  )
}

export default Singlecontent
