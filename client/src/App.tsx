import { useState } from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotificationProvider } from "./components/NotificationContex";
import Landing from "./routes/landing/Landing";
import SignIn from "./routes/signin/SignIn";
import SignUp from "./routes/signup/SignUp";

function App() {
  const [count, setCount] = useState(0);

  const AppRoutes = () => {
    return (
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    );
  };

  return (
    <NotificationProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
