import React from 'react'
import {Button} from 'antd'
import {withRouter} from 'react-router-dom'
import Calendar from './calendar.png'
import "./index.scss"
import blockchain from './blockchain-courses.jpg'

export default withRouter(({ history }) => {
  return (
    <div className="app-events-desktop">
      <Button type="primary" className="app-events-desktop__invest">Invest Now</Button>
      <div class="app-events-desktop__upcoming">
        <h2 style={{ marginBottom: "20px" }}>Upcoming events</h2>
        <div className="app-events-desktop__upcoming__event">
          <h3>Webinar</h3>
          <p>
            <b>Series: </b> How to brand yourself
          </p>
          <img src={Calendar} alt="Calendar"/>
        </div>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ marginBottom: "20px" }}>Trending Courses</h2>
        <div className="trend-course">
          <img src={blockchain} alt=""/>
          <b>Course: </b>What is Blockchain?
        </div>
      </div>
      <div>
        <Button type="primary"
          onClick={() => history.push('/fantastic-groups')}
        >Join a Fantastic Group</Button>
      </div>
    </div>
  )
})