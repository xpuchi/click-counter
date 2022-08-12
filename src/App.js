import "./App.css";
import Mouse from "../src/images/mouse.png";
import Button from "./components/Button";
import "./stylesheets/Button.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const click = () => {
    setNumClicks(numClicks + 1);
  };

  const restartCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={Mouse} alt="Logo" />
      </div>
      <div className="main-container">
        <Counter numClicks={numClicks} />
        <Button text="Click" isButtonClick={true} click={click} />
        <Button text="Restart" isButtonClick={false} click={restartCounter} />
      </div>
    </div>
  );
}

export default App;
