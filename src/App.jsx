import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MemberSelect from "./components/user/MemberSelect"
// import Response from "./components/user/Response"
// import MutualCheck from "./components/user/MutualCheck"
import MutualMember from "./components/user/MutualMember"
import AdminLogin from "./components/admin/AdminLogin"
import AdminDashboard from "./components/admin/AdminDashboard"
import VoteBacklog from "./components/admin/VoteBacklog"
import RoomList from "./components/admin/RoomList"

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

          {/* <Route path="/selectResponse/:roomCode/:userCode" element={<Response />} /> */}
          {/* <Route path="/mutualCheck" element={<MutualCheck />} /> */}
          <Route path="/mutualMember/:roomCode/:userCode" element={<MutualMember />} />
          
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/roomList" element={<RoomList />} />
          <Route path="/adminDashboard/:roomCode" element={<AdminDashboard />} />
          <Route path="/voteBacklog" element={<VoteBacklog />} />
        </Routes>
      </Router>
    </>
  )
}