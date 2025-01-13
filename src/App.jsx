import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserLogin from "./components/user/UserLogin"
import MemberSelect from "./components/user/MemberSelect"
import Response from "./components/user/Response"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/memberSelect" element={<MemberSelect />} />
          <Route path="/selectResponse" element={<Response />} />
        </Routes>
      </Router>
    </>
  )
}