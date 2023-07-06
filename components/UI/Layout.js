import React from 'react'
import NavBar from '../header/NavBar'

const Layout = (props) => {
  return (
    <>
        <NavBar />
        {props.children}
    </>
  )
}

export default Layout
