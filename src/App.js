
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/index.tsx"
import Login from "./view/login/index.tsx"
import Register from "./view/register/index.tsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
