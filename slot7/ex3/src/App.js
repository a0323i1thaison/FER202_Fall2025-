import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/banner';
import Banner from './components/navbar';
import Grid from './components/grid';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      < Grid /> 
      < Footer />
    </div>
  );
}

export default App;
