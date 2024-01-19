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
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from "./features/promotions/promotionsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
}, [dispatch]);

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
// the newest version of json-server doesn't work with this code
// json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000 
//(this is older syntax but works with this code and the older server)
//npm install -g json-server@0.17.4 to run old code
export default App;
