import { Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/index'
import Topics from './pages/topics'

function App() {
  

  return (
    <Routes>
			<Route path='/' element={<Index />} />
			<Route path='/sign_up' element={<sign_up />} />
      <Route path='/topics' element={<Topics />} />
		</Routes>
  )
}

export default App
