import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "../components/MainPages/LandingPage"
import JoinRoom from "../components/UserPages/JoinRoom"
import Loading from "../components/ReusableComponents/Loading"

export default function AppRoute() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/joinroom" element={<JoinRoom />} />
                    <Route path="/loading" element={<Loading />} /> 
                </Routes>
            </Router>
        </>
    )
}