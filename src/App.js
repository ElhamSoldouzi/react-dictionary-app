import logo from "./shecodes-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="img-fluid App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="moon" />
        </main>
        <footer className="App-footer">
          Coded by Elham Soldouzi open-sourced on{" "}
          <a
            href="https://github.com/ElhamSoldouzi/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://react-dictionary-app-seven.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </a>
        </footer>
      </div>
    </div>
  );
}
