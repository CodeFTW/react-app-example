import { Routes, Route } from "react-router-dom";
import GithubApiExample from "./GithubApiExample";
import Home from "./Home";

function App() {
  return (
    <div className="flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="github-api-example" element={<GithubApiExample />} />
      </Routes>
    </div>
  );
}

export default App;
