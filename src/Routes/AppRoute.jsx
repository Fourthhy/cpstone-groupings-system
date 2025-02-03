import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "../components/MainPages/LandingPage"
import JoinRoom from "../components/UserPages/JoinRoom"
import SelfVouch from "../components/UserPages/VouchProcess/SelfVouch"
import MemberVouch from "../components/UserPages/VouchProcess/MemberVouch"
import ResponsePage from "../components/UserPages/VouchProcess/ResponsePage"


export default function AppRoute() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/joinroom" element={<JoinRoom />} />
                    <Route path="/selfvouch" element={<SelfVouch />} /> 
                    <Route path="/membervouch" element={<MemberVouch />} /> 
                    <Route path="/responsepage" element={<ResponsePage />} /> 
                </Routes>
            </Router>
        </>
    )
}