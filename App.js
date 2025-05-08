import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Mycomponent/Navbar';
import TextForrm from './Mycomponent/TextForrm';
import Alert from './Mycomponent/alert';
import About from './Mycomponent/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#001b44"
      showAlert("Dark mode ", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Ligth mode", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container" >
          <Routes>
            <Route path='/About' element={<About mode={mode} />}>
            </Route>
            <Route path='/' element={<TextForrm showAlert={showAlert} heading="Enter Your Own Text" mode={mode} />}>
            </Route>

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
