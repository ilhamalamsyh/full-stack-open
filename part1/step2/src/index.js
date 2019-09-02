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

const Content = (data) => {
    return(
        <div>
            <p>{data.part1}</p>
            <p>{data.part2}</p>
            <p>{data.part3}</p>
            <img src = 'https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png'></img>
        </div>
    )
}

const Total = (value) => {
    return(
        <div>
            {value.exercise1}
            {value.exercise2}
            {value.exercise3}
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'

    return(
    <div>
        <Header course = {course} />
       <Content part1 = 'Fundamental of React'
                part2 = 'Using props to pass data'
                part3 = ' State of a component'
       />
       <Total exercise1 = '10'
              exercise2 = '7'
              exercise3 = '14'
       />
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))