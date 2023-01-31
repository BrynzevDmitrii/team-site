
import {Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import PersonPage from "./pages/PersonPage";
import Registration from "./pages/Registration";

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/person/:id' element={<PersonPage />}/>
    <Route path='/registration' element={<Registration />}/>
  </Routes>
  )
}

export default App
