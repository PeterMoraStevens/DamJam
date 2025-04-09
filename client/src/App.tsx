import { useState } from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "./routes/landing/Landing";

function App() {
  const [count, setCount] = useState(0);

  const AppRoutes = () => {
    return (
      <Routes>
        <Route index path="/" element={<Landing />} />
      </Routes>
    );
  };

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
