import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import Nav from './components/Nav';
// import { useContext } from 'react';
// import { AuthContext } from './context/CurcurrentUser';
import StudyProgram from './pages/StudyProgram';
import Instructions from './pages/Instructions';
import AboutUs from './pages/AboutUs';
import Quiz from './pages/quiz';
import UiuxCours from './components/UiuxCours';
import FontCourse from './components/Font/FontCourse';
import ColorCourse from './components/color/ColorCourse';
import TheoryCourse from './components/theories/TheoriesCourse';
import WhyCourse from './components/why/WhyCourse';
import CreativeCourse from './components/creativity/CreativityCourse';
import ThinkingCourse from './components/Thinking/ThinkingCourse';
// import Beginner from './components/Beginner';
function App() {
  // const { currentUser } = useContext(AuthContext)
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/'>
            <Route index element={<Homepage />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='program' element={<StudyProgram />} />
            <Route path='instruction' element={<Instructions />} />
            <Route path='about' element={<AboutUs />} />
            <Route path='beginnerQuiz' element={<Quiz />} />
            <Route path='uiux' element={<UiuxCours />} />
            <Route path='font' element={<FontCourse />} />
            <Route path='color' element={<ColorCourse />} />
            <Route path='theories' element={<TheoryCourse />} />
            <Route path='why' element={<WhyCourse />} />
            <Route path='thinking' element={<ThinkingCourse />} />
            <Route path='creative' element={<CreativeCourse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
