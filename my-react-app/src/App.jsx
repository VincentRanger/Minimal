import Login from "./components/Login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";


function App() {

  return (
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
