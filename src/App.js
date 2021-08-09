import Main from "./Pages/Main/Main";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Main />
        </header>
      </div>
    </>
  );
}

export default App;
