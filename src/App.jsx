import Login from "./components/Login";
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Aap from "./components/Aap";
import Ecommerce from "./components/Ecommerce";
import Analytic from "./components/Analytic";
import Booking from './components/Booking'
import Banking from './components/Banking'
import Course from './components/Course'
import File from './components/File'
import PrivateRoute from "./components/Protectedroutes";

function App() {

  return (
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute/>}>
          <Route path="dashboard" element={<Dashboard/>}>
          <Route path="app" element={<Aap/>}/>
          <Route path="ecommerce" element={<Ecommerce/>}/>
          <Route path="analytic" element={<Analytic/>}/>
          <Route path="banking" element={<Banking/>}/>
          <Route path="booking" element={<Booking/>}/>
          <Route path="file" element={<File/>}/>
          <Route path="course" element={<Course/>}/>
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
