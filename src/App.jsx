import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserLogin from "./components/user/UserLogin"
import MemberSelect from "./components/user/MemberSelect"
import Response from "./components/user/Response"
import MutualCheck from "./components/user/MutualCheck"
import MutualMember from "./components/user/MutualMember"
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/memberSelect" element={<MemberSelect />} />
          <Route path="/selectResponse" element={<Response />} />
          <Route path="/mutualCheck" element={<MutualCheck />} />
          <Route path="/mutualMember" element={<MutualMember />} />
        </Routes>
      </Router>
    </>
  )
}