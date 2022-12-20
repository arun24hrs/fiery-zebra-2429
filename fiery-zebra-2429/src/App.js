import './App.css';
import {Routes, Route} from "react-router-dom"
import { Home } from './Pages/Home';
import SignUp from './Components/SignUp';
import LoginPage from './Pages/LoginPage';
import LoginForm from './Pages/LoginForm';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/loginForm' element={<LoginForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
