import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1> {props.course} </h1>
  )
}
const Content =(props) => {
 
  return (
    <Part osat = {props.parts} />
  )
}

const Part= (props) => 
{
  return (
  <div>
  <p> {props.osat[0].name} : <strong>{props.osat[0].exercises} </strong></p>
  <p> {props.osat[1].name} : <strong>{props.osat[1].exercises} </strong></p>
  <p> {props.osat[2].name} : <strong>{props.osat[2].exercises} </strong></p>
  </div>
  )
}
const Total = (props) => {
  return (
    <>
    <p>Number of exercises: {props.amount[0].exercises + props.amount[1].exercises + props.amount[2].exercises} </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamntals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name:'State of a component',
      exercises: 17
    } 
    ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}  />
      <Total amount={parts}/>
  
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
