import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import MainLayout from './components/layouts/MainLayout'
import Courses from './components/Courses'
import SingleCourse from './components/SingleCourse'

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<MainLayout />}>
         <Route index element={<Home />} />
         <Route path="courses" element={<Courses />} />
         <Route path="courses/:courseSlug" element={<SingleCourse />} />
         <Route path="about" element={<About />} />
         <Route path="contacts" element={<Contacts />} />
         <Route path="*" element={<NotFound />} />
       </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App
