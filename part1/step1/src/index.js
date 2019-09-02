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
            <p>{props.part1}</p>
            <p>{props.part2}</p>
            <p>{props.part3}</p>
        </div>
    )
}

const App = () => {
    course = 'Half Stack application development'
    part1 = 'Fundamental of React'

    return(
    <div>
        <Header course ={course} />
        <Content part1 ={part1} />
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))