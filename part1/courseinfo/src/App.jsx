const Header = (prop) => {
  return (
    <h1>{prop.course}</h1>
  )
}
const Part = (prop) => {
  const part = prop.part
  return(
    <p>{part.name} {part.num}</p>
  )
}

const Content = (prop) => {
  const parts = prop.parts
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  )
}

const Total = (prop) => {
  const parts = prop.parts
  const total = parts[0].num + parts[1].num + parts[2].num
  return (
    <p>Number of exercises {total}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {name: 'Fundamentals of React', num: 10},
    {name:'Using props to pass data', num: 7},
    {name: 'State of a component', num: 14} 
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
     </div>
  )
}

export default App