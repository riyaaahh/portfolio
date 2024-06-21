import React from 'react';
import Home from './components/Home'
import Authentication from './components/Authentication'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Help from './components/Help';
import Portfoe1 from './components/Portfoe1';
import Getstarted from './components/Getstarted';
import Create from './components/Create';
import Aboutme from './components/Aboutme';
import Lolaa from './components/Lolaa';
import './firebase/firebase.js'
import Signup from './components/Signup.jsx';
import { AuthProvider } from './Context/index.jsx';
import Works from './components/Works.jsx';
import ContactMe from './components/ContactMe.jsx';
import Navbar from './components/Navbar.jsx'
import Form from './components/Form.jsx';
import Final from './components/Final.jsx';
import Portfoe2 from './components/Portfoe2.jsx';
import AboutMe2 from './components/Aboutme2.jsx';
import ContactMe2 from './components/ContactMe2.jsx';
import Works2 from './components/Works2.jsx';
import Blogs from './components/Blogs.jsx';
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blogs" element={<Blogs  />} />

            <Route path="/Authentication" element={<Authentication />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/ContactMe" element={<ContactMe />} />
            <Route path="/ContactMe2" element={<ContactMe2 />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/Portfoe1" element={<Portfoe1 />} />
            <Route path="/Portfoe2" element={<Portfoe2 />} />
            <Route path="/Getstarted" element={<Getstarted />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Works2" element={<Works2 />} />
            <Route path="/Aboutme" element={<Aboutme />} />
            <Route path="/Aboutme2" element={<AboutMe2 />} />
            <Route path="/Lolaa" element={<Lolaa />} />
            <Route path="/Works" element={<Works />} />
            <Route path="/ContactMe" element={<ContactMe />} />
            <Route path="/ContactMe2" element={<ContactMe2 />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Final" element={<Final/>} />



          </Routes>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
