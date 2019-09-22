import React from 'react'
import {Icon} from 'antd'
import Section from '../../shared/Section'
import body from './fg_marketing.png'
import "./index.scss"

export default () => {
  return (
    <Section>
      <div className="fg_one">
        <h2 style={{ color: "rgb(2, 167, 240)" }}>Fantastic Group</h2>
        <div className="fg_one__block">
          <h3 className="title">Digital Marketing</h3>
          <p className="info">
            <span>Meghan</span><br />
            <span>September 20, 2019</span>
          </p>
          <p className="message">
            Hey guys! I found this article on How to drive traffic to a website
          </p>
          <div className="image">
            <img src={body} alt="Message's Image"/>
          </div>
          <div className="stats">
            <span style={{ marginRight: "10px" }}>Comment</span>
            <span>
              <Icon type="arrow-up" style={{ color: "#000" }}/>
              <span>3</span>
            </span>
          </div>
        </div>
        <div className="fg_one__block">
          <h3>Digital Marketing</h3>
          <p>
            <span>Meghan</span><br />
            <span>September 20, 2019</span>
          </p>
          <p>
            Does anyone know where I can get a free domain?
          </p>
          <div>
            <span style={{ marginRight: "10px" }}>Comment</span>
            <span>
              <Icon type="arrow-up" style={{ color: "#000" }} />
              <span>3</span>
            </span>
          </div>
        </div>
      </div>
    </Section>
  )
}