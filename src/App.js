import React from 'react'
import { Navbar } from './components'
import { Feed } from './pages'

const App = () => {
  return (
    <div className='bg-primary'>
      <Navbar />
      <Feed />
    </div>
  )
}

export default App