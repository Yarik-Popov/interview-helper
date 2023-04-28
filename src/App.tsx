import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { ChangePageButton } from './pages/SetupWindow';
import { useNavigate } from 'react-router-dom';

function App() {
  const history = useNavigate();

  function handleButtonClick() {
    history('/setup')
  }

  return (
    <>
      <button onClick={handleButtonClick}>Go to setup</button>
    </>
  );
}

export default App;
