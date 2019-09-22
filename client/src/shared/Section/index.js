import React from 'react'
import { Breakpoint } from 'react-socks'
import Mobile from './Mobile'
import Desktop from './Desktop'
import "./index.scss"

export default ({ children }) => {
  return (
    <>
    <Breakpoint medium down>
      <Mobile>
        {children}
      </Mobile>
    </Breakpoint>
    <Breakpoint large up style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <Desktop>
        {children}
      </Desktop>
    </Breakpoint>
    </>
  )
}