import NavBar from '@/components/global/NavBar'
import React from 'react'

const layout = ({ children }) => {
  return (
    <div>
      <nav><NavBar/></nav>
        { children }
    </div>
  )
}

export default layout