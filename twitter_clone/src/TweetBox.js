import React, { useState } from 'react'
import { Avatar, Button } from '@mui/material'
import './TweetBox.css'
import db from './firebase'
import { collection, addDoc } from 'firebase/firestore/lite'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')
  const postCol = collection(db, 'posts')

  const sendTweet = (e) => {
    e.preventDefault()
    addDoc(postCol, {
      displayName: 'shubham',
      username: 'shubham_angral',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://pbs.twimg.com/profile_images/946382782866980865/Yct7CB-q_400x400.jpg',
    })

    setTweetMessage('')
    setTweetImage('')
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox_input'>
          <Avatar src='https://pbs.twimg.com/profile_images/946382782866980865/Yct7CB-q_400x400.jpg'></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening"
            type='text'
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className='tweetBox_imageInput'
          placeholder='Optional: Enter image URL'
          type='text'
        />
        <Button
          onClick={sendTweet}
          type='submit'
          className='tweetBox_tweetButton'
        >
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
