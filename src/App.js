import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserDetailsTable from "./components/UserDetailsTable";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="counter" element={<Counter />} />
          <Route path="/" element={<UserDetailsTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
