import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import TextForm2 from "./components/TextForm2";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // const toggleMode = () => {
  //   setMode((prevMode) => {
  //     const newMode = prevMode === 'light' ? 'dark' : 'light';
  //     document.body.style.filter = newMode === 'light' ? 'grayscale(0%)' : 'grayscale(100%)';
  //     return newMode;
  //   });
  // };
  const toggleMode = () => {
    setMode((prevMode) => {
      let newMode;
      if (prevMode === "light") {
        newMode = "dark";
        showAlert("Grey Mode has been Enabled", "Success");
      } else {
        newMode = "light";
        showAlert("Normal Mode has been Enabled", "Success");
      }
      return newMode;
    });
  };

  useEffect(() => {
    if (mode === "light") {
      document.body.style.filter = "grayscale(0%)";
    } else {
      document.body.style.filter = "grayscale(100%)";
    }
  }, [mode]);

  return (
    <>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TextForm message="Enter Any Text" showAlert={showAlert} />
            }
          />
          <Route
            path="/form2"
            element={
              <TextForm2 message="Enter Any Text" showAlert={showAlert} />
            }
          />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
