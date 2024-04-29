import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import Home from './components/Home'
import About from './components/About'
import Contact from "./components/Contact"


const App = () => (
  <div className='background-color'>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/contact" element={<Contact/>} />

   </Routes>
  </BrowserRouter>
  </div>
)

export default App