import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SignInPage } from "./modules/auth/pages/SignInPage";
import { SignUpPage } from "./modules/auth/pages/SignUpPage";
import { theme } from "./theme";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
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
          <Route path="/town-hall" element={<SignUpPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
