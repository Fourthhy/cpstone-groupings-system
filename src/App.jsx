import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserLogin from "./components/user/UserLogin"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserLogin />} />
        </Routes>
      </Router>
    </>
  )
}