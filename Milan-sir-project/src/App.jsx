import './App.css'
import { Routes, Route } from 'react-router-dom';
import Course from './pages/Course'
import VerifyAccess from './pages/VerifyAccess';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify-access" element={<VerifyAccess />} />
        <Route path="/course-content" element={<Course />} />
      </Routes>
    </>
  )
}

export default App
