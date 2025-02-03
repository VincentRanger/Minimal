import Login from "./components/Login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Aap from "./components/Aap";
import Ecommerce from "./components/Ecommerce";


function App() {

  return (
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          {/* <Route path="/app" element={<Aap/>}/>
          <Route path="/ecommerce" element={<Ecommerce/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
