import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
       <h1>
       {props.course}
       </h1>
        </div>
    )
}

const Content = (props) => {
    return(
        <div>
            <p>{props.part1.part2.part3}
             </p>
            
        </div>
    )
}

const Total = (props) => {
    return(
        <div>
            <p>
                {props.exercise1.exercise2.exercise3}
            </p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1  = 'Fundamental of React'
    const part2  = 'Using props to pass data'
    const part3  = 'State of component'
    const exercise1 = 10
    const exercise2 = 7
    const exercise3 = 14

    return(
    <div>
        <Header course = {course} />
        <Content part1 = {part1} />
        <Content part2 = {part2} />
        <Content part3 = {part3} />
        <Total exercise1 = {exercise1} />
        <Total exercise2 = {exercise2} />
        <Total exercise3 = {exercise3} />
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))