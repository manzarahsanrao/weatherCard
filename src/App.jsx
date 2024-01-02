import './App.css'
import Home from './pages/home.jsx'
import LocationState from './context/locationState.jsx'

function App() {

  return (
    <>
      <LocationState>
        <Home />
      </LocationState>
    </>
  )
}

export default App
