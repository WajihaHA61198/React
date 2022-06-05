import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState } from 'react'

function App() {
  const [user, setUser] = useState([])


  // 1-Fetch HTTP
  async function handleFetch() {
    var response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(await response.json())
  }

  // 2-Axios HTTP
  // const handleAxios = () => {
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }

  // 2.2-Axios with http show in screen, hooks use
  const handleAxios = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log(res.data)
        setUser(res.data)
      })
      .catch(err => console.log(err))
  }


  const loopData = user.map(data => {
    return <>
      <h6>Username: {data.username}</h6>
      <h6>Email: {data.email}</h6>
      <h6>Website: {data.website}</h6>
      <hr />
    </>
  })

  return (
    <div className="App">
      <h1>HTTP Modules</h1>
      <button onClick={handleFetch}>Get data using fetch</button>
      <br />
      <br />
      <button onClick={handleAxios}>Get data using axios</button>
      {loopData} {/* show the api data*/}
    </div>
  );
}

export default App;
