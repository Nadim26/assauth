
import './App.css';
import { Route,Routes } from "react-router-dom";
import loginpage from './page/loginpage';
function App() {
  return (
    <Routes>
    <Route path='/login' element={loginpage}/>
    </Routes>
    
  );
}

export default App;
