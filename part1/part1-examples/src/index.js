import React, {useState} from 'react';
import ReactDOM from 'react-dom';

/* Basics */
/* 
const Hello = ({name, age}) => { 
  const bornYear= () => new Date().getFullYear() - age
  return(
  <div>
    <p>Hello {name}, you are {age} years old </p>
    <p>So you were propapbly born {bornYear()}</p>
  </div>
)
}

const App = () => { 
  const nimi = 'Pekka'
  const ika= 10
                           
  return(
  <>
    <h1>Greetings</h1>
    <Hello name="Pirkko" age={20+10}/>
    <Hello name={nimi} age={ika}/>
   
  </>
)
}
 */
 /* Simple state */ 
 /*
  const Display = (counter) => <div>{counter}</div>

 const Button = (handleClick, text) => 
  <button onClick={handleClick}>
    {text}
  </button>

 const App = (props) => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter +1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter-1)
   return (
     <div>
      <Display counter ={counter}/>
      <Button handleClick={increaseByOne} text='Plus'/>
      <Button handleClick={setToZero} text='Zero'/>
      <Button handleClick={decreaseByOne} text='Minus' />
     </div>
   )
 }
 */

/* Multiple states */ 
/* Tables */
/*
const History = (props) => {
  if (props.allClicks.length === 0 ){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({onClick, text}) => 
  <button onClick={onClick}>
    {text}
  </button>

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  /*const [clicks, setClicks] = useState ({
    left: 0, right: 0
  })
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    //setClicks({...clicks, left: clicks.left +1})
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right +1)
    //setClicks({...clicks, right: clicks.right +1})
  }
  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text='left'/>
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks}/>
      </div>
    </div>
  )
}
*/

/* Function returns function */

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)
const Display = props => <div>{props.value}</div>

const App = (props) => {
  const [value, setValue] = useState(10)

  //functio calls a function
  const hello = (who) => () => {
   console.log('hello', who)
  }

  const setToValue = (newValue) =>{
    setValue(newValue)
  } 
  return (
    <div>
      
      <button onClick={hello('world')}> hello button</button>
      <button onClick={hello('react')}>hello button</button>
      <button onClick={hello('function')}>hello button</button>
      <Display value= {value} />
      <Button handleClick={() => setToValue(1000)} text='thousand' />
      <Button handleClick={() => setToValue(0)} text='reset'/>
      <Button handleClick={() => setToValue(value + 1)}text='increment'/>

    </div>
  )
}



ReactDOM.render(
<App/>,
document.getElementById('root'))
