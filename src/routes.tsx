import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Bookingpage from "./pages/Bookingpage";

export default function () {
  return (
    <Routes>
      <Route element={<Home/>} path="/" index/>
      <Route element={<Bookingpage/>} path="/bookings"/>
    </Routes>
  );
};