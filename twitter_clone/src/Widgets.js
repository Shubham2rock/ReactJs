import React from 'react'
import './Widgets.css'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search'

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <SearchIcon className='widgets_searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>
      <div className='widgets_widgetContainer'>
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={'1251843655503155204'} />

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='Shubhamangral'
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={'https://facebook.com/shubham_angral'}
          options={{ text: '#reactjs is awesome', via: 'Shubhamangral' }}
        />
      </div>
    </div>
  )
}

export default Widgets
