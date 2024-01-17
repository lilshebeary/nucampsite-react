import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import CampsiteDetailPage from "./pages/CampsiteDetailPage";
import AboutPage from "./pages/AboutPage";
import { fetchCampsites } from "./features/campsites/campsitesSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
  }, [dispatch])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="directory" element={<CampsitesDirectoryPage />} />
        <Route 
          path='directory/:campsiteId'
          element={<CampsiteDetailPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
// json-server -h 0.0.0.0 -w db.json -p 3001 2000
//npm install -g json-server@0.17.4 to run old code
export default App;
