import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import GetInvolved from "./pages/GetInvolved";
import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <BrowserRouter basename="/creativeproject3/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="GetInvolved" element={<GetInvolved />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}