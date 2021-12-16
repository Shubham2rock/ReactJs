import * as React from 'react'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import axios from 'axios'
import { img_500, unavailable, unavailableLandscape } from './config'
import './ContentModal.css'

export default function ComponentModal({ children, media_type, id }) {
  const [open, setOpen] = React.useState(false)
  const [content, setContent] = React.useState()
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=0334b1896d217d467996edf3a97e7704&language=en-US`
    )
    console.log(data)

    setContent(data)
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div
        className='media'
        style={{ cursor: 'pointer' }}
        color='inherit'
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        // aria-labelledby='transition-modal-title'
        // aria-describedby='transition-modal-description'
        // className='modalcss'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {/* <Box sx={style}> */}
          {/* <Typography id='transition-modal-title' variant='h6' component='h2'>
              Text in a modal
            </Typography>
            <Typography id='transition-modal-description' sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
          {content && (
            <div className='mainModal'>
              <div className='ContentModal'>
                <img
                  className='ContentModal_portrait'
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                />
                <img
                  className='ContentModal_landscape'
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                />
                <div className='ContentModal_about'>
                  <span className='ContentModal_title'>
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      '-----'
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className='tagline'>{content.tagline}</i>
                  )}

                  <span className='ContentModal_description'>
                    {content.overview}
                  </span>
                </div>
              </div>
            </div>
          )}
          {/* </Box> */}
        </Fade>
      </Modal>
    </div>
  )
}
