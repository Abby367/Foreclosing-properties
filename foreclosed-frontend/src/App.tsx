import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
			<Routes>
			
						<Route index element={<LandingPage />} />
						<Route path="/" element={<LandingPage />} />
						<Route path="*" element={<Navigate to="/" />} />
	
			</Routes>
		</BrowserRouter>
	);
}

export default App;
