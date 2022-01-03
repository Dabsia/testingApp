import React, {useState, useEffect} from 'react';
import 'tachyons'; 
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css'

function App(){
  
    // this.state = {
    //   robots: [],
    //   searchfield: ''
    // }
  
    const [robots, setRobots] = useState([]);
    const [searchfield, setSerchfield] = useState('');
    const [count, setCount] = useState(0)


    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setRobots(data))
      .catch(err => console.log(err))
      console.log(count )
    }, [count])
  // componentDidMount(){
    //fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => this.setState({robots:data}))
    // .catch(err => console.log(err))
  // }

  const onSearchChange = (event) =>{
      setSerchfield(event.target.value)
  }
   

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
          <button onClick={() => setCount(count + 1)}>Click</button>
          <SearchBox searchChange = {onSearchChange} />
          <Scroll>
          <CardList robots = {filteredRobots}/>
          </Scroll>
        </div>
  
  
}

export default App;


// In the onsearchChange function, we set the state of the searchfield to be the event.target.value

// we create a variable that filters throuigh the robots array that is going to be filtered through if the condition of the filter method is met
// Then we pass it as props to the CardList component

// Whenever we type in something into the input box,The onsearchChange function sets the state to that value

// useState does array destructuring. I accepts a variable and a function and sets its initial state to be whatever u put into the params
// const [count, setCount] = useState(0)
// to change the state of count, u do setCount(whatever u want the new state to be)