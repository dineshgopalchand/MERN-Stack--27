import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import './App.css';
import MainLayout from './layout/MainLayout';
import UserLayout from './layout/UserLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NotFound from './pages/not-found/NotFound';
import Profile from './pages/Profile';
import Account from './pages/Account';
import ServiceDetails from './pages/services/ServiceDetails';
import ServiceList from './pages/services/ServiceList';
import Services from './pages/services/Services';
import Login from './pages/login/Login';
import { NoLoggedInAuth, RequireAuth } from './store/AuthProvider';



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
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={
            <NoLoggedInAuth>
              <Login />
            </NoLoggedInAuth>
          } />
          <Route path="user" element={
            <RequireAuth>
              <UserLayout />
            </RequireAuth>
          } >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
