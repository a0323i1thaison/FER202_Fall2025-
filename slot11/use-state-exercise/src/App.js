
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterComponent from './Component/CounterComponent';
import LightSwitch from './Component/LightSwitch';
import LoginForm from './Component/LoginForm';
import LoginForm2 from './Component/LoginForm2';
import SearchItem from './Component/SearchItem';
import AccountSearch from './Component/AccountSearch';
import RegisterForm from './Component/RegisterForm';
function App() {
  return (
    <div >
        <CounterComponent />
        <LightSwitch />
        <LoginForm />
        <LoginForm2 />
        <SearchItem /> 
        <AccountSearch />   
        <RegisterForm />
    </div>
  );
}

export default App;
