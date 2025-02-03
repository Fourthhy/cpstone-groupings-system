import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "../components/MainPages/LandingPage"
import SelfVouch from "../components/UserPages/VouchProcess/SelfVouch"
import MemberVouch from "../components/UserPages/VouchProcess/MemberVouch"
import ResponsePage from "../components/UserPages/VouchProcess/ResponsePage"
import JoinRoom from "../components/UserPages/VouchProcess/JoinRoom"
import CheckVouch from "../components/UserPages/CheckVouch/CheckVouch"
import VouchResults from "../components/UserPages/CheckVouch/VouchResults"

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

                    <Route path="/checkvouch" element={<CheckVouch /> }/>
                    <Route path="/vouchresults" element={<VouchResults /> }/>
                </Routes>
            </Router>
        </>
    )
}