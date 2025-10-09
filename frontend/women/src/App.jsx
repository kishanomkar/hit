
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Map from './pages/Map'

import Login from './pages/Login'
import SignUpPage from './pages/Signup'
import Home from './pages/Home'
import SosApp from './pages/SOS'
import SafeGuardApp from './pages/OneforAll'


const App = () => {
  return (
    <Router>
      <Routes>
      
        <Route path="/map" element={<Map />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sos" element={<SosApp />} />
        <Route path="/sasuke" element={<SafeGuardApp />} />
      


      </Routes>
    </Router>
  )
}

export default App
