import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./index.css";
import HomePage from "./components/HomePage";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Looking from "./components/Looking";
import Admin from "./components/Admin";
import AddCampaign from "./components/AddCampaign";
import AddCampaigns from "./components/AddCampaign";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/lookupblood" element={<Looking/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/campaign" element={<AddCampaigns/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
