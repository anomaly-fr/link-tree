import me from './me.png'
import './App.css'
import { React, useState } from 'react'
import Button from './components/Button'
import { HiMoon, HiOutlineMoon } from 'react-icons/hi'

const App = () => {
  const [darkMode, isDarkMode] = useState(false)
  const links = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/anomaly_fr/',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/anomaly_fr',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/anomaly-fr',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/anomaly-fr/',
    },
  ]
  return (
    <div className={darkMode ? 'app-background-dark' : 'app-background'}>
      <div className={darkMode ? 'app-header-dark' : 'app-header'}>
        <div className={darkMode ? 'app-header-left-dark' : 'app-header-left'}>
          <div className="app-header-text-div">
            <p className="app-header-text">Anam Ali</p>
          </div>
        </div>
        <div className="switch">
          {darkMode ? (
            <HiMoon
              onClick={() => isDarkMode(!darkMode)}
              size="20"
              className="moon"
            />
          ) : (
            <HiOutlineMoon
              onClick={() => isDarkMode(!darkMode)}
              size="20"
              className="moon"
            />
          )}
        </div>
      </div>
      <div className="circle-pos">
        <img src={me} className="circle"></img>
        {/* </div> */}
      </div>
      <div className="app-body">
        <div className="app-body-upper">
          <div className="text-area">
            <p className={darkMode ? 'text-dark' : 'text'}>
              "GDSC Lead; Developer; Ardent Jane Austen Fan"
            </p>
          </div>
        </div>

        <div className="button-area">
          {links.map((social, index) => {
            return (
              <Button
                dark={darkMode}
                key={index}
                name={social.name}
                link={social.link}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
