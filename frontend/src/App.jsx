import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, SendMoney, Signin, Signup } from "./Pages/index";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
