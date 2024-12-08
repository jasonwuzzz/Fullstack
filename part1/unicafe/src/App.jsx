import { useState } from 'react'

const Header = (prop) => {
  return (
    <h1>{prop.name}</h1>
  )
}

const Button = (prop) => {
  return (
    <button onClick={prop.onClick}>{prop.name}</button>
  )
}

const Feedback = (prop) => {
  return (
    <div>{prop.name} {prop.num}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header name='give feedback' />
      <Button onClick={() => setGood(good + 1)} name='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} name='neutral'/>
      <Button onClick={() => setBad(bad + 1)} name='bad'/>
      <Header name='statistics' />
      <Feedback name='good' num={good}/>
      <Feedback name='neutral' num={neutral}/>
      <Feedback name='bad' num={bad}/>
    </div>
  )
}

export default App