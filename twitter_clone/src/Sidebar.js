import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import TwitterIcon from '@mui/icons-material/Twitter'
import HomeIcon from '@mui/icons-material/Home'
import TagIcon from '@mui/icons-material/Tag'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Button } from '@mui/material'

function Sidebar() {
  return (
    <div className='sidebar'>
      {/* twitter icon */}
      <TwitterIcon className='sidebar_twitterIcon' />

      <SidebarOption active Icon={HomeIcon} text='Home' />
      <SidebarOption Icon={TagIcon} text='Explore' />
      <SidebarOption Icon={NotificationsNoneIcon} text='Notifications' />
      <SidebarOption Icon={MailOutlineIcon} text='Messages' />
      <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks' />
      <SidebarOption Icon={ListAltIcon} text='Lists' />
      <SidebarOption Icon={PermIdentityIcon} text='Profile' />
      <SidebarOption Icon={MoreHorizIcon} text='More' />

      {/* sidebaroption */}

      {/* button tweets */}
      <Button variant='outlined' className='sidebar_tweet' fullWidth>
        Tweet
      </Button>
    </div>
  )
}

export default Sidebar
