import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
) 
const Display = (props) => {
  return (
    <div>
    <h3>statistics</h3>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    </div>
  )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodFeedback = () => {
    setGood(good +1)
  }
  const setNeutralFeedback = () => {
    setNeutral(neutral +1)
  }
  const setBadFeedback = () => {
    setBad(bad +1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={setGoodFeedback} text='good'/>
      <Button onClick={setNeutralFeedback} text='neutral'/>
      <Button onClick={setBadFeedback} text='bad'/>

      <Display good= {good} neutral={neutral} bad= {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)