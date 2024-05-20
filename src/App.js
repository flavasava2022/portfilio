
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';

function App() {

  return (
    <div>
      <Header />
      <div className="min-h-[80vh] ">
        <Home/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
