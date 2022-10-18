import './styles/App.css';
import { Route, Router } from 'react-router-dom';
import Games from '../containers/games/Games';
import Navbar from '../containers/navbar/navbar'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Games />
      {/* <Router>
        <Route exact path='/games' component={Games} />
      </Router> */}
    </div>
  );
}

export default App;