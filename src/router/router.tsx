import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Button from "../pages/Button";
import Card from "../pages/Card";
import Footer from "../pages/Footer";
import HomePage from "../pages/HomePage";
import Input from "../pages/Input";
import LangToggle from "../pages/LangToggle";
import Navbar from "../pages/Navbar";
import NavLink from "../pages/NavLink";
import SideMenu from "../pages/SideMenu";
import Spinner from "../pages/Spinner";
import Switch from "../pages/Switch";
import ThemeToggle from "../pages/ThemeToggle";
import Backgrounds from "../pages/Backgrounds";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buttons" element={<Button />} />
        <Route path="/navbars" element={<Navbar />} />
        <Route path="/backgrounds" element={<Backgrounds />} />
        <Route path="/cards" element={<Card />} />
        <Route path="/forms" element={<Input />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/lang-toggle" element={<LangToggle />} />
        <Route path="/nav-link" element={<NavLink />} />
        <Route path="/side-menu" element={<SideMenu />} />
        <Route path="/spinner" element={<Spinner />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/theme-toggle" element={<ThemeToggle />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}
