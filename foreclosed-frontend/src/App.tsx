import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Stack } from "@mui/joy";

function App() {
  return (
    <Stack>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Stack>
  );
}

export default App;
