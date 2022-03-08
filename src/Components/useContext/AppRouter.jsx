import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LognScreen, AboutScreen, HomeScreen, NavBar } from "./index";
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/about" element={<AboutScreen />} />
            <Route exact path="/login" element={<LognScreen />} />
            <Route path="*" element={<HomeScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
