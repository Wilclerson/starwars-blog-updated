import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { People } from "./views/people.jsx";
import { SpecificPerson } from "./views/specificPerson.jsx";
import { Planets } from "./views/planets.jsx";
import { SpecificPlanet } from "./views/specificPlanet.jsx";
import { Vehicles } from "./views/vehicles.jsx";
import { SpecificVehicle } from "./views/specificVehicle.jsx";
import { Starships } from "./views/starships.jsx";
import { SpecificStarship } from "./views/specificStarship.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

const Layout = () => {

  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<SpecificPerson />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:id" element={<SpecificPlanet />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<SpecificVehicle />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/starships/:id" element={<SpecificStarship />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);