import React, { useState, useEffect } from 'react' // For functional
// import React, { Component } from 'react' // For component
import './App.css'
import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL

const Header = (props: { title: string }) => {
  return <h1>{props.title}</h1>
}


// JS Counterpart
// ReactDOM.render(
//   React.createElement(Hello, {toWhat: 'World'}, null),
//   document.getElementById('root')
// )

// JSX sample
// ReactDOM.render(
//   <Hello toWhat="World" />,
//   document.getElementById('root')
// )

export function App() {
  const [isUp, setIsUp] = useState(false)
  const [result, setResult] = useState('')
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')

  const handleCheckApi = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/check`)
      const { status } = data
      if (status === "up") {
        setIsUp(true)
      } else {
        setIsUp(false)
      }
    } catch (e) {
      console.error(e)
      setIsUp(false)
    }
  }

  useEffect(() => {
    handleCheckApi()
  }) // undefined, [], or [<value you want to observe>]

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    console.log(apiUrl)
    try {
      const { data } = await axios.post(`${apiUrl}/add`, { number1: Number(number1), number2: Number(number2) })
      const { result } = data
      setResult(result)
    } catch (e) {
      console.error(e)
    }
  }

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    if(evt.currentTarget.id === "number1") {
      console.log(evt.currentTarget.value)
      setNumber1(evt.currentTarget.value)
    } else {
      setNumber2(evt.currentTarget.value)
    }
  }



  return <div className="container">
    <Header title="Function component with hooks"/>
    <div>
      <button onClick={handleCheckApi}>Check Local API</button>
    </div>
    <div className="numbers-form">
      <form onSubmit={handleSubmit}>
        <input id="number1" type="text" value={number1} onChange={handleChange} placeholder="first number" />
        <input id="number2" type="text" value={number2} onChange={handleChange} placeholder="second number" />
        <button type='submit'>Add two numbers</button>
      </form>
    </div>
    <div>API Status: {isUp ? "Up" : "Down"}</div>
    <div>Math result: {result}</div>
  </div>
}

// export class App extends Component {
//   state = {
//     isUp: false,
//     result: 0,
//     number1: '',
//     number2: '',
//   }

//   componentDidMount() {
//     this.handleCheckApi()
//   }

//   handleCheckApi = async () => {
//     try {
//       const { data } = await axios.get(`${apiUrl}/check`)
//       const { status } = data
//       if (status === "up") {
//         this.setState({
//           isUp: true
//         })
//       } else {
//         this.setState({
//           isUp: false
//         })
//       }
//     } catch (e) {
//       console.error(e)
//       this.setState({
//         isUp: false
//       })
//     }
//   }

//   handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
//     evt.preventDefault()
//     console.log(apiUrl)
//     try {
//       const { number1, number2 } = this.state
//       const { data } = await axios.post(`${apiUrl}/add`, { number1: Number(number1), number2: Number(number2) })
//       const { result } = data
//       this.setState({
//         result
//       })
//     } catch (e) {
//       console.error(e)
//     }
//   }

//   handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
//     console.log(evt.currentTarget.id)
//     if (evt.currentTarget.id === "number1") {
//       this.setState({ number1: evt.currentTarget.value })
//     } else {
//       this.setState({ number2: evt.currentTarget.value })
//     }
//   }


//   render() {
//     const { handleSubmit, handleCheckApi, handleChange } = this
//     const { isUp, result } = this.state // equivalent to this.state
//     return <div className="container">
//       <Header title='Class component'/>
//       <div>
//         <button onClick={handleCheckApi}>Check Local API</button>
//       </div>
//       <div className="numbers-form">
//         <form onSubmit={handleSubmit}>
//           <input id="number1" type="text" onChange={handleChange} placeholder="first number" />
//           <input id="number2" type="text" onChange={handleChange} placeholder="second number" />
//           <button type='submit'>Add two numbers</button>
//         </form>
//       </div>
//       <div>API Status: {isUp ? "Up" : "Down"}</div>
//       <div>Math result: {result}</div>
//     </div>
//   }
// }

export default App;
