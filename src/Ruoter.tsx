import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Trips from './components/Trips';
import TripDetail from './components/TripDetail';
import NewTripForm from './components/NewTripForm';
import UpdateTripForm from './components/UpdateTripForm';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
function Ruoter() {
    return (
        <div>

            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Trips" element={<Trips />} />
                    <Route path="/TripDetail" element={<TripDetail />} />
                    <Route path="/NewTripForm" element={<NewTripForm />} />
                    <Route path="/UpdateTripForm" element={<UpdateTripForm />} />
                    <Route path="/UserLogin" element={<UserLogin />} />
                    <Route path="/UserRegistration" element={<UserRegistration />} />
                </Routes>
            </Router>

        </div>

    )
}

export default Ruoter