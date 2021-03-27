import React, { Component } from 'react'

class App extends Component {
  componentDidMount(){
    fetch("https://swapi-thinkful.herokuapp.com/api/people")
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  render() { 
    return (  
      <div className = 'App'>

      </div>
    )
  }
}
 
export default App;
