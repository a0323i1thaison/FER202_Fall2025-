import logo from './logo.svg';
import './App.css';
import CounterComponent from './components/CounterComponent';
import ToggleSwitch from './components/ToggleSwitch';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignUpForm';
import QuestionBank from './components/QuestionBank';
function App() {
  return (
    <div>
      <CounterComponent />
      <ToggleSwitch />
      <LoginForm />
      <SignupForm />
      <QuestionBank />
    </div>
  );
}

export default App;
