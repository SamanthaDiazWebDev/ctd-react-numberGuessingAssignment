import React, {  useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  }

  const onSubmitGuess = (event) => {
    event.preventDefault();
    onGuess(currentGuess);
    setCurrentGuess("");
  }


  return (
    <form onSubmit={onSubmitGuess}>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </form>
  );
}
export default GuessControl;
