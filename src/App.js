import React, {Component} from 'react';
import 'tachyons'; 
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) =>{
      this.setState({searchfield:event.target.value})
  }
  
  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLocaleLowerCase()
      .includes(this.state.searchfield.toLocaleLowerCase())
    })
    return (
      <div className="App">
        <h1 className='tc'>RoboFriends</h1>
        <SearchBox searchChange = {this.onSearchChange} />
        <CardList robots = {filteredRobots}/>
      </div>
    );
  }
  
}

export default App;


// In the onsearchChange function, we set the state of the searchfield to be the event.target.value

// we create a variable that filters throuigh the robots array that is going to be filtered through if the condition of the filter method is met
// Then we pass it as props to the CardList component

// Whenever we type in something into the input box,The onsearchChange function sets the state to that value