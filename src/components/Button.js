import React from 'react'
import './Button.css'
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from 'react-icons/ai'

const Button = ({ name, link }) => {
  return (
    <div className="button">
      <div className="button-title">
        <p className="button-title-text">{name}</p>
      </div>
      <div className="button-edge">
        <div className="shape" />
        <div className="button-logo">{logoIcon(name)}</div>
      </div>
    </div>
  )
}

const logoIcon = (name) => {
  if (name === 'Instagram') {
    return <AiOutlineInstagram className="logo" size="2vw" />
  } else if (name === 'Twitter')
    return <AiOutlineTwitter className="logo" size="2vw" />
  else if (name === 'GitHub')
    return <AiOutlineGithub className="logo" size="2vw" />
  else if (name === 'LinkedIn')
    return <AiOutlineLinkedin className="logo" size="2vw" />
}

export default Button
