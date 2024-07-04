import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar, Futher, ContactForm } from "./components";

import {
  Home,
  About,
  Services,
  Portfolio,
  Comunity,
  Contact,
  ContactPage,
  PortfolioPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-neutral-800 text-white w-full overflow-hidden">
        <div className="flex justify-center items-center px-6 py-2 fixed w-full bg-neutral-800 z-10 shadow-lg ">
          <div className="xl:max-w-[1600px] w-full">
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="bg-neutral-700 flex justify-center items-center px-6">
                  <div className="xl:max-w-[1600px] w-full">
                    <Home />
                  </div>
                </div>

                <div className="flex justify-center items-center px-6 py-20">
                  <div className="xl:max-w-[1600px] w-full">
                    <About />
                  </div>
                </div>

                <div className="bg-white text-black flex justify-center items-center px-6 py-20">
                  <div className="xl:max-w-[1600px] w-full">
                    <Services />
                  </div>
                </div>

                <div className="flex justify-center items-center px-6 py-28">
                  <div className="xl:max-w-[1600px] w-full">
                    <Portfolio />
                  </div>
                </div>

                <div className="bg-neutral-700 flex justify-center items-center px-6 py-20">
                  <div className="xl:max-w-[1600px] w-full">
                    <Comunity />
                  </div>
                </div>

                <div className="bg-white text-black flex justify-center items-center px-6 py-20">
                  <div className="xl:max-w-[1600px] w-full">
                    <Contact />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/contacto"
            element={
              <>
                <div className="flex justify-center items-center px-6 pt-28">
                  <div className="xl:max-w-[1600px] w-full">
                    <ContactPage />
                  </div>
                </div>
                <div className="bg-white text-black flex justify-center items-center px-6 py-20">
                  <div className="xl:max-w-[1600px] w-full">
                    <ContactForm />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/portfolio"
            element={
              <>
                <div className="bg-neutral-700 flex justify-center items-center px-6 pt-44">
                  <div className="xl:max-w-[1600px] w-full">
                    <PortfolioPage />
                  </div>
                </div>
              </>
            }
          />
        </Routes>

        <div className="flex justify-center items-center px-6 pt-20">
          <div className="xl:max-w-[1600px] w-full">
            <Futher />
            <div className="flex justify-center items-center py-10">
              <h1 className="text-neutral-400">
                &copy; 2024 - nicomvazquez.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
