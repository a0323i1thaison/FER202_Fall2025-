import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import Menu from './components/menu';
import BookingForm from './components/bookingform';
import Footer from './components/footer';

function App() {
  return (
     <div className="App">
      <Header />
      <Slider />
      <Menu />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
