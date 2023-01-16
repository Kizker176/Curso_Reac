import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";

function AppRoutingOne() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutingOne;
