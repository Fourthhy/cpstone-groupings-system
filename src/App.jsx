import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MemberSelect from "./components/user/MemberSelect"
import AdminDashboard from "./components/admin/AdminDashboard"
import VoteBacklog from "./components/admin/VoteBacklog"

//Landing Page 
import LandingPage from "./components/user/LandingPage"

//Login Page
import UserLogin from "./components/user/UserLogin"

//Self Vouch Page
import SelfVouch from "./components/UserPages/VouchProcess/SelfVouch"

//Member Vouch Page
import MemberVouch from "./components/UserPages/VouchProcess/MemberVouch"

//Response Vouch Page
import Response from "./components/UserPages/VouchProcess/ResponsePage"

//Review a Vouch
import CheckVouch from "./components/UserPages/CheckVouch/CheckVouch"

//Check Mutuals - actual
import VouchResults from "./components/UserPages/CheckVouch/VouchResults"

//Login as Admin
import AdminLogin from "./components/AdminPages/AdminLogin"

//Logged in the RoomList 
import RoomList from "./components/AdminPages/RoomList"

//The room itself
import Room from "./components/AdminPages/Room"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/userLogin" element={<UserLogin />} />

          <Route path="/memberSelect/:roomCode" element={<MemberSelect />} />

          <Route path="/selfvouch/:roomCode" element={<SelfVouch /> } />

          <Route path="/membervouch/:roomCode/:userCode" element={<MemberVouch />} />

          <Route path="/responsepage/:roomCode/:userCode" element={<Response />} />

          <Route path="/checkvouch" element={<CheckVouch />} />

          <Route path="/vouchresults/:roomCode/:userCode" element={<VouchResults />} />

          <Route path="/adminLogin" element={<AdminLogin /> } />

          <Route path="/roomList" element={<RoomList />} />

          <Route path="/room/:roomCode" element={<Room /> } />

          <Route path="/adminDashboard/:roomCode" element={<AdminDashboard />} />
          <Route path="/voteBacklog" element={<VoteBacklog />} />

        </Routes>
      </Router>
    </>
  )
}