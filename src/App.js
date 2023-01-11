import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import Nav from './components/Nav';
import { useContext } from 'react';
import { AuthContext } from './context/CurcurrentUser';
import StudyProgram from './pages/StudyProgram';
import Instructions from './pages/Instructions';
import AboutUs from './pages/AboutUs';
import Quiz from './pages/quiz';
import UiuxCours from './components/UiuxCours';
// import Beginner from './components/Beginner';
function App() {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className="App">
      <BrowserRouter>
        {currentUser && <Nav />}

        <Routes>
          <Route path='/'>
            <Route index element={currentUser ? <Homepage /> : <Login />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='program' element={currentUser ? <StudyProgram /> : <Login />} />
            <Route path='instruction' element={<Instructions />} />
            <Route path='about' element={<AboutUs />} />
            <Route path='beginnerQuiz' element={<Quiz />} />
            <Route path='uiux' element={<UiuxCours />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
