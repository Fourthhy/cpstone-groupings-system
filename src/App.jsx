import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MemberSelect from "./components/user/MemberSelect"
import Response from "./components/user/Response"
import MutualCheck from "./components/user/MutualCheck"
import MutualMember from "./components/user/MutualMember"
import AdminLogin from "./components/admin/AdminLogin"
import AdminDashboard from "./components/admin/AdminDashboard"
import VoteBacklog from "./components/admin/VoteBacklog"
import RoomList from "./components/admin/RoomList"

//Landing Page 
import LandingPage from "./components/user/LandingPage"

//Login Page
import UserLogin from "./components/user/UserLogin"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/userLogin" element={<UserLogin />} />

          <Route path="/memberSelect/:roomCode/:userCode" element={<MemberSelect />} />
          
          <Route path="/selectResponse/:roomCode/:userCode" element={<Response />} />
          <Route path="/mutualCheck" element={<MutualCheck />} />
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