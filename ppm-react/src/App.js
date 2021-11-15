
import './App.css';
import Dashboard from './components/dashboad';
import Header from './components/Project/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom"
import AddProject from './components/Project/AddProject';
import {Provider} from "react-redux"
import store from './components/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App"> 
         

             <Header/>
           
          <Routes> 
           <Route path="/" element={<Dashboard/>} />
           <Route path="/addProject" element={<AddProject/>}/>
          </Routes>
        </div>
      </Router>  
    </Provider>
  );
}

export default App;
