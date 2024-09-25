import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ChallengeDetails from "./components/ChallengeDetails";
import EditChallenge from "./components/EditChallenge"; // Import the EditChallenge component
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/hackathon" element={<Home />} />
          <Route path="/hackathon/admin" element={<Admin />} />
          <Route path="/hackathon/details/:id" element={<ChallengeDetails />} />
          <Route path="/hackathon/details/:id/edit" element={<EditChallenge />} /> {/* Route for editing challenges */}
          <Route path="*" element={<Error />} /> {/* Catch-all route for 404 errors */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
