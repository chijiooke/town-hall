import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignInPage } from "./modules/auth/pages/SignInPage";
import SignUpPage from "./modules/auth/pages/SignUpPage";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
