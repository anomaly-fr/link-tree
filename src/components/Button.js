import React, { useState } from 'react'
import './Button.css'
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from 'react-icons/ai'

const Button = ({ dark, name, link }) => {
  return (
    <div
      onClick={() => {
        const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }}
      className={dark ? 'button-dark' : 'button'}
    >
      <div className="button-title">
        <p className="button-title-text">{name}</p>
      </div>
      <div className="button-edge">
        <div className={dark ? 'button-logo-dark' : 'button-logo'}>
          {logoIcon(name)}
        </div>
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
