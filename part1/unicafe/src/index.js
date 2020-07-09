import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button style={{ margin: "4px 2px"}} type="button" onClick={props.onClick}>{props.text}</button>
) 
const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positivePercentage = (good / total) *100
  if (total === 0) {
    return (
      <div>
    <h3>statistics</h3>
    <p> No feedback given</p>
    </div>
    )
  }
  return (
    <div>
    <h3>statistics</h3>
    <table>
      <tbody>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="total" value={total} />
    <StatisticLine text="average" value={average.toFixed(2)} />
    <StatisticLine text="positive-%" value={positivePercentage.toFixed(1)+'%'} />
      </tbody>
    </table>
    </div>
  )
}
const StatisticLine =(props) => {
  return (
    <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
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

      <Statistics good= {good} neutral={neutral} bad= {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)