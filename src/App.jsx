import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserLogin from "./components/user/UserLogin"
import MemberSelect from "./components/user/MemberSelect"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MemberSelect />} />
        </Routes>
      </Router>
    </>
  )
}