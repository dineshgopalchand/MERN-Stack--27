import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "services",
      element: <Services />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "about",
      element: <About />,
    },
  ]);
  return (
    <RouterProvider router={router}>
      <div className="App">
        <Header />
        <main className='main-container'>
          <Home />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}

export default App;
