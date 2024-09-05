import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import HomeA from "./Components/HomeA";
import HomePageB from "./Components/HomePageB";
import HomePageC from "./Components/HomePageC";
import HomeD from "./Components/HomeD";
import HomeE from "./Components/HomeE";
import CreateChallenges from "./Pages/CreateChallenges";
import { ChallengeProvider } from "./Context/challengeProvider";
import ChallengeDetails from "./Components/ChallengeDetails";

function App() {
  return (
    <ChallengeProvider>
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeA />
                <HomePageB />
                <HomePageC />
                <HomeD />
                <HomeE />
              </>
            }
          />
          <Route path="/create-challenge" element={<CreateChallenges />} />
          <Route path="/challenge/:id" element={<ChallengeDetails />} />
        </Routes>
      </Layout>
    </Router>
    </ChallengeProvider>
  );
}

export default App;
