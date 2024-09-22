import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import Alert from "./Components/Alert";

function App() {
  const [Mode, setMode] = React.useState("light");
  const [alert, setAlert] = React.useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3C3C3C";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* Routes define different paths */}
        <Routes>
          {/* Define route for home and TextForm */}
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                Header="Enter text to analyze"
                mode={Mode}
              />
            }
          />
          {/* Uncomment the route for About when you're ready */}
          {/* <Route exact path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
