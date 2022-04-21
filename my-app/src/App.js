import './App.css';
import BodyComponent from './Components/body/BodyComponent';
import HeaderComponent from './Components/header/HeaderComponent';

function App() {
  return (
    <div className="App">
      <header><HeaderComponent/></header>
      <div><BodyComponent/></div>
    </div>
  );
}

export default App;
