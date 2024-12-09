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

const StatisticLine = (prop) => {
  return (
    <tr>
      <td>{prop.text}</td>
      <td>{prop.value}</td>
    </tr>
  )
}

const Statistics = (prop) => {
  const { good, neutral, bad} = prop;
  const all = good + neutral + bad;
  const sum = good - bad;
  if (all) {
    return (
      <table>
        <tbody>
          <StatisticLine text='good' value={good}/>
          <StatisticLine text='neutral' value={neutral}/>
          <StatisticLine text='bad' value={bad}/>
          <StatisticLine text="all" value={all} />
          <StatisticLine text='average' value={sum/all} />
          <StatisticLine text='positive' value={String(good/all * 100) + ' %'} />
        </tbody>
      </table>
    );
  } else {
    return (
      <div>No feedback given</div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header name='give feedback' />
      <Button onClick={() => setGood(good + 1)} name='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} name='neutral'/>
      <Button onClick={() => setBad(bad + 1)} name='bad'/>
      <Header name='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App