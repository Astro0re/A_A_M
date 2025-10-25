import 'react'
import './App.css'

function scroll_through(){
  
}

function App() {
  

  return (
    <>
      <div>
        <h1>Welcome...</h1>
        <p onScroll={ scroll_through} id='scroll'></p>
        <p>To a safe space for men to express themselves, learn and grow.
        </p>
        <p>
          With advice and support from trusted and succesful male models.
        </p>
        <p> 
          join us as we disscus, grow and florish.
        </p>
      </div>

      <div>
        <ul>
          <li>Topics</li>
          <li></li>
        </ul>
      </div>
    </>
  )
}

export default App
