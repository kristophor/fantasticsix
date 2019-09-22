import React from 'react'
import {Progress} from 'antd'
import {Link} from 'react-router-dom'
import Section from '../../shared/Section'
import "./index.scss"
import lh from './classroom-2.png'
import fg from './image.png'
import lady from './sjenner13120800027.jpg'

const items = [
  {
    title: "My Profile",
    img: '',
    to: "/profile"
  },
  {
    title: "Learning Hub",
    img: lh,
    to: "/learning-hub"
  },
  {
    title: "Fantastic Group",
    img: fg,
    to: "/fantastic-groups"
  }
]
const inv = [
  {
    title: "Personal Project",
    rate: "3020",
    percent: 60,
  },
  {
    title: "Group Project",
    rate: "520",
    percent: 30
  },
  {
    title: "Invested in others",
    rate: "50",
    percent: 7
  }
]

export default () => {
  return (
    <Section>
      <h1 style={{color: "rgb(2, 167, 240)"}}>Dashboard</h1>
      <div className="dashboard__list">
        {items.map((i, ind) => {
          return (
            <div className="dashboard__list__item">
              <Link to={i.to}>
                {
                  i.title !== "My Profile"
                    ? (
                      <div className="dashboard__list__item__block">
                        <img src={i.img} alt=""/>
                      </div>
                    )
                    : <div className="dashboard__list__item__block" style={{
                      background: `url(${lady})`,
                      backgroundPosition: "top center",
                      backgroundSize: "cover"
                    }}/>
                }
                <h3>{i.title}</h3>
              </Link>
            </div>
          )
        })}
      </div>
      <h1>My Investments</h1>
      <div className="dashboard__investments">
        {inv.map(i => {
          return (
            <div className="dashboard__investments__item">
              <h3 style={{color: "rgb(2, 167, 240)"}}>{i.title}</h3>
              <section>
                <Progress status="active" showInfo={false} percent={i.percent}/> <b
                style={{color: "rgb(2, 167, 240)", fontSize: "20px", marginLeft: "20px"}}>${i.rate}</b>
              </section>
            </div>
          )
        })}
      </div>
    </Section>
  )
}