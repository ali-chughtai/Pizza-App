import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePizza from './createPizza'
import ShowAllPizzas from './showAllPizzas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CreatePizza/>
        <ShowAllPizzas/>
      </header>
    </div>
  );
}

export default App;
