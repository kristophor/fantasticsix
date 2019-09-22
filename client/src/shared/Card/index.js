import React from 'react'
import Mock from './mock.png'
import "./index.scss"

export default ({ img, title, text }) => {
  return (
    <div className="card-item">
      <div className="card-item__image">
        <img src={img} alt={title} />
      </div>
      <h3 className="card-item__title">{title}</h3>
      <p className="card-item__text">{text}</p>
    </div>
  )
}