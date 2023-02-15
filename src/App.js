
import './App.css';
import { Route,Routes } from "react-router-dom";
import Loginpage from './page/Loginpage';
function App() {
  return (
    <Routes>
    <Route path='/login' element={<Loginpage/>}/>
    </Routes>
    
  );
}

export default App;
