import { Container } from '@mui/material'
import './App.css'
import Navigation from './Navigation'
import Trending from './Trending'
import Search from './Search'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='App'>
          <span className='header'>
            <Header />
          </span>
          <Container>
            <Routes>
              <Route exact path='/' element={<Trending />} />
              <Route exact path='/search' element={<Search />} />
            </Routes>
          </Container>
        </div>
        <Navigation />
      </div>
    </BrowserRouter>
  )
}

export default App
