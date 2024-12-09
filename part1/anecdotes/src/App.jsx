import { useState } from 'react'


function getRandomInt (max) {
  return Math.floor(Math.random() * max);
}

const Botton = (prop) => {
  return (
      <button onClick={prop.handleClick}>{prop.text}</button>    
  )
}

const Vote = (prop) => {
  const plural = prop.num == 1 ? "" : "s";
  return (
    <div>has {prop.num} vote{plural}</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [mostVote, setMostVote] = useState(0);

  function handleClick () {
    const next = getRandomInt(anecdotes.length);
    setSelected(next);
  }

  function handleVote (index) {
    let new_votes = [...votes];
    new_votes[index] += 1;
    setVotes(new_votes);

    const biggest = Math.max(...votes);
    for (let i = 0; i < votes.length; i ++) {
      if (biggest == votes[i]) {
        setMostVote(i);
        break
      }
    }
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <Vote num={votes[selected]} />
      <div>
        <Botton handleClick={() => handleVote(selected)} text='vote' />
        <Botton handleClick={handleClick} text='next anecdote' />
      </div>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[mostVote]}
      </div>
      <Vote num={votes[mostVote]} />
    </>
  )
}

export default App