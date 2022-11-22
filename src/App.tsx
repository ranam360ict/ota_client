import "antd/dist/reset.css";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import "./App.css";
import CarRental from "./ota/Pages/CarRental";
import FilterPage from "./ota/Pages/FilterPage";
import OtaFlight from "./ota/Pages/OtaFlight";

import ViewOta from "./ota/Pages/ViewOta";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ViewOta />}>
        <Route path="/flight" element={<OtaFlight />} />
        <Route path="/car-rental" element={<CarRental />} />
        <Route path="/filter-page" element={<FilterPage></FilterPage>} />
      </Route>
    </Routes>
  );
}

export default App;
