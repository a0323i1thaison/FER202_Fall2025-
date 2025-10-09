import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterPage from './components/Footer/MyFooter';
import HomePage from './pages/HomePage';
function App() {
  return (
    <div className="App">
     <HomePage/>
     <FooterPage />
    </div>
  );
}

export default App;
