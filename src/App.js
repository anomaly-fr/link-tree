import me from './me.png'
import './App.css'
import Button from './components/Button'

const App = () => {
  return (
    <div className="app-background">
      <div className="app-header">
        <p>Hey there, it's Anam. I'm a </p>
      </div>
      <div className="circle-pos">
        {/* <div className="circle"> */}
        <img src={me} className="circle"></img>
        {/* </div> */}
      </div>
      <div className="button-area">
        <Button name="Instagram" />
        <Button name="Twitter" />
        <Button name="LinkedIn" />
        <Button name="GitHub" />
      </div>
    </div>
  )
}

export default App
