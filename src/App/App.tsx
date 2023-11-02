import "./App.css";
import TheLogin from "@/pages/auth/TheLogin";
import TheForget from "@/pages/auth/TheForget";
import TheRegister from "@/pages/auth/TheCode";
import TheHome from "@/views/TheHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TheAuth from "@/views/TheAuth/TheAuth";
import { ConfigProvider } from "antd";
import TheCode from "@/pages/auth/TheCode";
import TheIDNumber from "@/pages/auth/TheIDNumber";
const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1075b8",
          fontSize: 18,
        },
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<TheHome />}></Route>
          <Route path="/auth/" element={<TheAuth />}>
            <Route path="login" element={<TheLogin />}></Route>
            <Route path="code" element={<TheCode />}></Route>
            <Route path="id" element={<TheIDNumber />}></Route>
            <Route path="register" element={<TheRegister />}></Route>
            <Route path="forget" element={<TheForget />}></Route>
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;
