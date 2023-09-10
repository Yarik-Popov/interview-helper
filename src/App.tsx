import React from 'react';
import './App.css';
// import { ChangePageButton } from './pages/SetupWindow';
import { Route, Routes } from "react-router-dom"
import { PATH_HOME, PATH_INTERVIEW, PATH_SETUP } from './constants/paths';
import SetupWindow from './pages/SetupPage';
import InterviewPages from './pages/InterviewPage';
import Home from './pages/HomePage';

function App() {
  const questions = ["What is your name?", "What is your quest?", "What is your favorite color?"];

  return (
    <>
    
    <Routes>
      <Route path={PATH_HOME} element={<Home />} />
      <Route path={PATH_INTERVIEW} element={<InterviewPages questions={questions}/>} />
      <Route path={PATH_SETUP} element={<SetupWindow questions={questions}/>} />
    </Routes>
    </>
    
  );
}

export default App;
