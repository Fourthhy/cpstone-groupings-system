import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "../components/MainPages/LandingPage"

export default function AppRoute() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </Router>
        </>
    )
}