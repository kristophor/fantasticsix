import React from 'react'
import {Rate, Progress, Button} from 'antd';
import User from './user.png'
import Lady from './sjenner13120800027.jpg'
import IniOne from './initial_1.png'
import IniTwo from './initial_2.png'
import IniThree from './initial_3.png'
import PhotoOne from './photo_1.jpg'
import PhotoTwo from './photo_2.jpg'
import PhotoThree from './photo_3.jpg'
import MemberOne from './MemberOne.jpg'
import MemberTwo from './memberTwo.png'
import Section from '../../shared/Section'
import "./index.scss"

const cred = ["Full Name", "Role/Field", "Location", "Rating"]

export default () => {
  return (
    <Section>
      <div className="profile">
        <div className="profile__user">
          <div className="profile__user__info">
            <div className="profile__user__info__image" style={{ backgroundImage: `url(${Lady})` }} />
            <div className="profile__user__info__cred">
              <div className="profile__user__info__cred__item">
                <b>Meghan Lambordi</b>
              </div>
              <div className="profile__user__info__cred__item">
                <span>Photographer</span>
              </div>
              <div className="profile__user__info__cred__item">
                <span>Toronto, ON</span>
              </div>
              <div className="profile__user__info__cred__item">
                <b>Rating: </b><Rate disabled value={5}/>
              </div>
            </div>
            <div>
            </div>
          </div>
          <div className="profile__user__about">
            <h2 style={{color: "rgb(2, 167, 240)"}}>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut consequuntur doloremque ea
              earum error eum in laudantium libero modi odio omnis optio, quaerat quam quasi quibusdam, recusandae
              repudiandae ullam?</p>
          </div>
          <div className="profile__user__progress">
            <h2 style={{color: "rgb(2, 167, 240)"}}>Goal</h2>
            <div className="profile__user__progress__line">
              <Progress
                percent={50} status="active" showInfo={false}/>
              <b>$5000</b>
            </div>
          </div>
          <div className="profile__user__portfolio">
            <h2 style={{color: "rgb(2, 167, 240)"}}>Portfolio</h2>
            <div className="profile__user__portfolio__list">
              <div className="profile__user__portfolio__list__item">
                <img src={PhotoOne} alt="Portfolio's Photo"/>
              </div>
              <div className="profile__user__portfolio__list__item">
                <img src={PhotoTwo} alt="Portfolio's Photo"/>
              </div>
              <div className="profile__user__portfolio__list__item">
                <img src={PhotoThree} alt="Portfolio's Photo"/>
              </div>
            </div>
          </div>
          <div className="profile__user__investors">
            <h2 style={{color: "rgb(2, 167, 240)"}}>Investor Endorsement</h2>
            <div className="profile__user__investors__list">
              <div className="profile__user__investors__list__item">
                <div className="profile__user__investors__list__item__image">
                  <img src={IniOne} alt="Initials"/>
                </div>
                <span>has invested in $300</span>
              </div>
              <div className="profile__user__investors__list__item">
                <div className="profile__user__investors__list__item__image">
                  <img src={IniTwo} alt="Initials"/>
                </div>
                <span>has invested in $300</span>
              </div>
              <div className="profile__user__investors__list__item">
                <div className="profile__user__investors__list__item__image">
                  <img src={IniThree} alt="Initials"/>
                </div>
                <span>has invested in $300</span>
              </div>
            </div>
          </div>
          <div className="profile__user__group-project">
            <h2 style={{color: "rgb(2, 167, 240)"}}>Group Project</h2>
            <div className="profile__user__group-project">
              <div className="profile__user__group-project__pitch p-block">
                <h4>Project Pitch</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quae, repellat! Aliquam, assumenda at
                  cumque ducimus earum facilis fuga iure, </p>
              </div>
              <div className="profile__user__group-project__members p-block">
                <h4>Team Members</h4>
                <div className="profile__user__group-project__members__list">
                  <div className="person">
                    <img src={MemberOne} alt="Member's Photo"/>
                    <span>Bill</span>
                  </div>
                  <div className="person">
                    <img src={MemberTwo} alt="Member's Photo"/>
                    <span>Bill</span>
                  </div>
                </div>
              </div>
              <div className="profile__user__group-project__goal p-block">
                <h4>Goal Amount</h4>
                <h2>$4500</h2>
              </div>
            </div>
          </div>
          <div className="group-project-actions">
            <Button type="primary" className="app-events-desktop__invest">Invest Now</Button>
          </div>
        </div>
      </div>
    </Section>
  )
}