import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import './App.css'
import Index from './pages/index'
import Topics from './pages/topics'


function App() {
    return (
    <Routes>
			<Route path='/' element={<Index />} />
      <Route path='/topics' element={<Topics />} />
		</Routes>
  )
  
}

export default App

