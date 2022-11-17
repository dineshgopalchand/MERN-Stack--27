import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <main className='main-container'>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
