import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

const routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/appointments" element={<Appointments />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default routers;
