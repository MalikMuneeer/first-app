import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
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
    }, 1000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#112440";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router basename="/first-app">
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                Header="Try TextUtils-Word Counter, Character Counter, Remove extra spaces"
                mode={Mode}
              />
            }
          />
          <Route exact path="/about" element={<About mode={Mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
