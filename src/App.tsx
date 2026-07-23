
import './App.css'
import Header from './components/Header'
import Message from './components/Message'
import NavI from './components/Nav'

function App() {

  return (
    <>
      <NavI></NavI>
      <Header></Header>

      <section id="center">
        <div className="hero">
          <Message></Message>
        </div>
      </section>

      <div className="ticks"></div>


      <div className="ticks"></div>

      
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
