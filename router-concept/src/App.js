import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import './App.css';
import MainLayout from './layout/MainLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/not-found/NotFound';
import ServiceDetails from './pages/services/ServiceDetails';
import ServiceList from './pages/services/ServiceList';
import Services from './pages/services/Services';



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="Services" element={<Services />} >
            <Route index element={<ServiceList />} />
            <Route path=":id/:type" element={<ServiceDetails />} />
          </Route>
          {/* <Route path="Services/:id/:type" element={<Services />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
