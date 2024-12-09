const Part = ({ part }) => {
  return  (
    <div>{part.name} {part.exercises}</div>
  )
}

const Header = ({ header }) => {
  return (
    <h1>{header}</h1>
  )
}

const Content = ({ content }) => {
  return (content.map(part => 
    <Part key={part.id} part={part} />
  ))
}

const Course = ({ course }) => {
  const header = course.name;
  const content = course.parts;
  return (
    <>
      <Header header={header} />
      <Content content={content} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App