
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Menu from './Menu'

function App() {
  
  return (
    <>
      <div className="website">
      <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
       <Route path="/about" element={<About/>}>About</Route>
       <Route path="/service" element={<Service/>}>Service</Route>
       <Route path="/contact" element={<Contact/>}>Contact</Route>
       
    </Routes> 
  
 </div>
    </>
  )
  }

export default App;
