import React from 'react';
import { ConvexProvider, ConvexReactClient } from 'convex/react'; // Import ConvexProvider and ConvexReactClient
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignUp } from './components/Signup'; // Import your SignUp component
import { Login } from './components/Login'; // Import your Login component

// Create a Convex client
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

function App() {
  return (
    <ConvexProvider client={convex}>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ConvexProvider>
  );
}

export default App;
