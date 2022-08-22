import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Index from './Component/Index';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './ManTineComp/Home';


function App() {
  return (
    <>
    <Router>
     
      <Routes>
    {/* <Route path="/" exact element={<Home/>}/> */}
        <Route path ='/' exact element={<Index/>}/>
          <Route path='/dashboard' exact element={<Dashboard/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
