
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Map from './pages/Map'

import Login from './pages/Login'
import SignUpPage from './pages/Signup'
import Home from './pages/Home'
import SosApp from './pages/SOS'
import SafeGuardApp from './pages/OneforAll'
import Profile from './pages/Profile'
import SosComposer from './components/Sms'



const App = () => {

  const emergencyContacts = [import.meta.env.VITE_EMERGENCY_CONTACT];
  return (
    <Router>
      <Routes>
      
        <Route path="/map" element={<Map />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/sos" element={<SosApp />} />
        <Route path="/women" element={<SafeGuardApp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sms" element={<SosComposer contacts={emergencyContacts}/>} />
      


      </Routes>
    </Router>
  )
}

export default App
