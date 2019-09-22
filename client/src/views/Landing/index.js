import React from 'react'
import {Button} from 'antd'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Card from '../../shared/Card'
import Block from '../../components/Landing/Block'
import Header from '../../components/Landing/Header'
import "./index.scss"

import community from './community.png'
import knowledge from './knowledge.png'
import microloan from './microloan.png'
import main from './main.jpeg'

const cards = [
  {
    id: 1,
    title: "Micro Loan",
    text: "Get a micro finance loan up to $5000 per transaction",
    img: microloan
  },
  {
    id: 2,
    title: "Knowledge",
    text: "Build your business knowledge",
    img: knowledge
  },
  {
    id: 3,
    title: "Community",
    text: "Connect with a community",
    img: community
  }
]

export default connect(state => ({ user: state.user }))(({ user }) => {
  return (
    <div className="landing">
      <Header />
      <div className="landing__main">
        <div style={{ textAlign: "left" }}>
          <h1>Empowering Canadians in the Gig Economy</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem culpa cupiditate dignissimos ex in inventore itaque laborum laudantium, nesciunt non praesentium quasi quod sed similique veritatis voluptas voluptatibus. Exercitationem!</p>
          {
            user.data.uid
              ? <Link to="/dashboard" className="link-dashboard">Dashboard</Link>
              : ''
          }
        </div>
        <img src={main} alt="Main Landing Photo"/>
      </div>
      <h1 style={{ marginBottom: "60px" }}>Give your dream a chance to shine</h1>
      <Block>
        <div className="landing__cards">
          {cards.map(c => <Card {...c} />)}
        </div>
      </Block>
    </div>
  )
})