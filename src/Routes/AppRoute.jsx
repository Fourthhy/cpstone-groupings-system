import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "../components/MainPages/LandingPage"
import JoinRoom from "../components/UserPages/JoinRoom"
import SelfVouch from "../components/UserPages/VouchProcess/SelfVouch"

export default function AppRoute() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/joinroom" element={<JoinRoom />} />
                    <Route path="/selfvouch" element={<SelfVouch />} /> 
                </Routes>
            </Router>
        </>
    )
}