import './App.css';
import {Routes, Route} from "react-router-dom"
import { Home } from './Pages/Home';
import SignUp from './Components/SignUp';
import LoginPage from './Pages/LoginPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
