// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import WeatherPage from './Features/Common/Pages/WeatherPage';
import PersonsPage from './Features/Person/Pages/PersonsPage';

const App = () => {
    return (
        <div>
            <div>
                <Link to="/">Weather</Link>
                <Link to="Persons">Persons</Link>
                <br />
                <br />
                <Routes>
                    <Route path="/" element={<WeatherPage />} />
                    <Route path="/persons" element={<PersonsPage />} />
                </Routes>
            </div>
        </div>
        //<Router>
        //    <div>
        //        <nav>
        //            <ul>
        //                <li>
        //                    <Link to="/">Home</Link>
        //                </li>
        //                <li>
        //                    <Link to="/persons">About</Link>
        //                </li>
        //            </ul>
        //        </nav>

        //        <hr />

        //        <Route exact path="/" component={WeatherPage} />
        //        <Route path="/persons" component={PersonsPage} />
        //    </div>
        //</Router>
    );
};

export default App;
