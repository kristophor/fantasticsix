import React from 'react'
import AppHeader from '../AppHeader/Desktop'
import AppFooter from '../AppFooter'
import Events from '../Events/Desktop'

export default ({children}) => {
  return (
    <>
    <AppHeader/>
    <div className="section-desktop">
      <div className="section-desktop__main">
        {children}
      </div>
      <Events/>
    </div>
    <AppFooter/>
    </>
  )
}