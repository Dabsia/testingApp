import React, {Component} from 'react';
import 'tachyons'; 
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css'

class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({robots:data}))
    .catch(err => console.log(err))
  }

  onSearchChange = (event) =>{
      this.setState({searchfield:event.target.value})
  }
  
  render(){
    const {robots, searchfield} = this.state

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase()
      .includes(searchfield.toLocaleLowerCase())
    })
      return !robots.length ?
        <div className='loading' >
          <h1>Loading</h1>
        </div>
      
    :
    
        <div className="App">
          <h1 className='tc'>RoboFriends</h1>
          <SearchBox searchChange = {this.onSearchChange} />
          <Scroll>
          <CardList robots = {filteredRobots}/>
          </Scroll>
        </div>
  }
  
}

export default App;


// In the onsearchChange function, we set the state of the searchfield to be the event.target.value

// we create a variable that filters throuigh the robots array that is going to be filtered through if the condition of the filter method is met
// Then we pass it as props to the CardList component

// Whenever we type in something into the input box,The onsearchChange function sets the state to that value