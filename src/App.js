import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Education from './components/Education'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/exp" element={<Experience />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
