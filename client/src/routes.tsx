import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SignInPage } from "./modules/auth/pages/SignInPage";
import { SignUpPage } from "./modules/auth/pages/SignUpPage";
import { theme } from "./theme";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Dashboard } from "./modules/dashboard/Dashboard";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
