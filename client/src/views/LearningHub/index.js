import React from 'react'
import {Icon, Progress} from 'antd'
import Section from '../../shared/Section'
import Logo from './0.png'
import BadgeOne from './badge_1.jpg'
import BadgeTwo from './badge_2.jpeg'
import InProgress from './in_progress.jpg'
import Completed from './completed.jpeg'
import "./index.scss"

export default () => {
  return (
    <Section>
      <h1 style={{ marginBottom: "30px", color: "rgb(2, 167, 240)" }}>Learning Hub</h1>
      <div className="lh__badges">
        <h2  className="lh-title">My Badges</h2>
        <div className="lh__badges__list">
          <img src={BadgeOne} alt="Badge's Photo"/>
          <img src={BadgeTwo} alt="Badge's Photo"/>
        </div>
      </div>
      <div className="lh__cip">
        <h2 className="lh-title">Courses In Progress</h2>
        <div className="lh__cip__list">
          <div className="lh__cip__list__item">
            <div className="lh__cip__list__item__left">
              <img src={InProgress} alt=""/>
              <div className="stats">
                <Icon type="like" theme="filled" className="stats__icon"  />
                <Icon type="dislike" theme="filled" className="stats__icon" />
                <Icon type="plus" className="stats__icon" />
              </div>
            </div>
            <div className="lh__cip__list__item__right">
              <div className="lh__progress">
                <h3 style={{ color: "rgb(2, 167, 240)" }}>How to pitch your service</h3>
                <Progress
                  percent={50} status="active" showInfo={false}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lh__cc">
        <h2 className="lh-title">Completed Courses</h2>
        <div className="lh__cc__list">
          <div className="lh__cc__list__item">
            <div className="lh__cc__list__item__left">
              <h3 style={{ fontWeight: "400" }}>Marketing Fundamentals</h3>
              <img src={Completed} alt=""/>
              <div className="stats">
                <Icon type="like" theme="filled" className="stats__icon"  />
                <Icon type="dislike" theme="filled" className="stats__icon" />
                <Icon type="plus" className="stats__icon" />
              </div>
            </div>
            <div className="lh__cc__list__item__right">
              <div>September 2019</div>
            </div>
          </div>
        </div>
      </div>
      <div className="lh__rc">
        <h2 style={{ marginBottom: "30px" }}>Recommended Courses</h2>
        <div className="lh__rc__list">
          <div className="lh__rc__list__item">
            Sales & Marketing
          </div>
          <div className="lh__rc__list__item">
            Product Development
          </div>
          <div className="lh__rc__list__item">
            Finance & Accounting
          </div>
          <div className="lh__rc__list__item">
            Soft Skills
          </div>
        </div>
      </div>
    </Section>
  )
}