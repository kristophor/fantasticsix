import React from 'react'
import Events from '../Events/Desktop'

export default ({ children }) => {
  return (
    <div>
      {/*<AppHeader />*/}
      <div className="section-mobile">
        <div className="section-mobile__main">
          {children}
        </div>
      </div>
    </div>
  )
}