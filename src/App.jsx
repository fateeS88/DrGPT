import './App.css'
import Header from './Components/Header.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Signup from './Components/Signup.jsx'
import Signin from './Components/Signin.jsx';


function App() {
  

  return (

     <div>
      <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
      </Routes>
      </Router>
     </div>
  )
}

export default App
