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
import Profile from './components/Profile'
import PrivateRoute from "./components/Protectedroutes";
import User from './components/User'
import Followers from './components/Followers'
import Friends from './components/Friends'
import Gallery from './components/Gallery'

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
          <Route path="profile" element={<Profile/>}>
          <Route path="user" element={<User/>}/>
          <Route path="followers" element={<Followers/>}/>
          <Route path="friends" element={<Friends/>}/>
          <Route path="gallery" element={<Gallery/>}/>
          </Route>
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
