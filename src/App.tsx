import "antd/dist/reset.css";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import "./App.css";
import CarRental from "./ota/Pages/CarRental";
import FlightPage from "./ota/Pages/FlightPage";
import OtaFlight from "./ota/Pages/OtaFlight";
import TravellerInfo from "./ota/Pages/TravellerInfo";

import ViewOta from "./ota/Pages/ViewOta";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ViewOta />}>
        <Route path="/flight" element={<OtaFlight />} />
        <Route path="/car-rental" element={<CarRental />} />
        <Route path="/filter-page" element={<FlightPage />} />
        <Route path="/traveller-info" element={<TravellerInfo />} />
      </Route>
    </Routes>
  );
}

export default App;
