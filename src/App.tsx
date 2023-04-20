import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Error from './Page/Error/Error';
import Contact from "./Page/Contact/Contact";

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
    );
}

export default App