import "antd/dist/reset.css";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import "./App.css";
import CarRental from "./ota/Pages/CarRental";
import FlightPage from "./ota/Pages/FlightPage";
import OtaFlight from "./ota/Pages/OtaFlight";
import TravellerInfo from "./ota/Pages/TravellerInfo";

import ViewOta from "./ota/Pages/ViewOta";
import Register from "./register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ViewOta />}>
        {/* <Route element={<OtaFlight />} /> */}
        <Route path="/flight" element={<OtaFlight />} />
        <Route path="car-rental" element={<CarRental />} />
        <Route path="filter-page" element={<FlightPage />} />
        <Route path="traveller-info" element={<TravellerInfo />} />
        <Route index element={<Register></Register>} />
        <Route path="/register" element={<Register></Register>} />
      </Route>
    </Routes>
  );
}

export default App;
