import React from 'react'
import Section from '../../shared/Section'
import graphics from './graphics.png'
import digital from './digital.png'
import tech from './tech.png'
import content from './content_writing.png'

import PhotoOne from './ff_1.jpg'
import PhotoTwo from './ff_2.jpg'
import PhotoThree from './ff_3.jpg'
import "./index.scss"

const items = [
  {
    title: "Graphics & Design",
    img: graphics
  },
  {
    title: "Content Writing",
    img: content
  },
  {
    title: "Digital Marketing",
    img: digital
  },
  {
    title: "Tech",
    img: tech
  }
]

export default () => {
  return (
    <Section>
      <div className="fg">
        <h2 style={{color: "rgb(2, 167, 240)"}}>Fantastic Groups</h2>
        <div className="fg__list">
          {items.map(i => {
            return (
              <div className="fg__list__item">
                <h3>{i.title}</h3>
                <img src={i.img} alt="Group's Image"/>
              </div>
            )
          })}
        </div>
      </div>
      <div className="ff">
        <h2 style={{color: "rgb(2, 167, 240)"}}>Featured Freelancers</h2>
        <div className="ff__list">
          <img src={PhotoOne} alt="Freelancer's Photo"/>
          <img src={PhotoTwo} alt="Freelancer's Photo"/>
          <img src={PhotoThree} alt="Freelancer's Photo"/>
        </div>
      </div>
    </Section>
  )
}