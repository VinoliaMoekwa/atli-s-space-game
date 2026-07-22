import { useState, useMemo,useEffect } from "react";
import "./App.css";

import { questions } from "./data/questions";
import { lowercaseQuestions } from "./data/lowercaseQuestions";
import { generateOptions } from "./utils/generateOptions";
import { matchingQuestions } from "./data/matchingQuestions";
import { phonicsQuestions } from "./data/phonicsQuestions";

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function App() {
  // State
  const [gameStarted, setGameStarted] = useState(false);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [mission, setMission] = useState(1);


  const gameQuestions = useMemo(() => {
  const missions = [
  questions,
  lowercaseQuestions,
 matchingQuestions,
  phonicsQuestions,
];
  return shuffleArray(missions[mission - 1]);
}, [mission]);
  const question = gameQuestions[currentQuestion];
  const options = generateOptions(question.answer);
  function handleAnswer(selectedLetter) {
  if (selectedLetter !== question.answer) {
    alert("Try again!");
    return;
  }

  if (currentQuestion < gameQuestions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
    return;
  }

  // End of the mission
  if (mission < 3) {
    alert(`🎉 Congratulations! You completed Mission ${mission}!`);
    setMission(mission + 1);
    setCurrentQuestion(0);
  } else {
    alert("🎉 Congratulations! You completed all missions! 🚀");
  }
}

function speak(text) {
  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.8;

  speechSynthesis.speak(utterance);
}

useEffect(() => {
  if (mission === 4) {
    speak(question.sound);
  }
}, [mission, question]);
{mission === 4 ? (
  <button onClick={() => speak(question.sound)}>
    🔊 Hear Again
  </button>
) : (
  <h1>{question.target}</h1>
)}


  return (
    <div className="app">
      {!gameStarted ? (
        <section className="landing-page">
          <div className="hero">
            <div className="rocket">🚀</div>

            <h1>Atli's Space Game</h1>

            <p className="subtitle">
              Welcome, Captain!
            </p>

            <p className="description">
              Help your rocket collect stars and reach the Moon.
            </p>

            <button
              className="start-btn"
              onClick={() => setGameStarted(true)}
            >
              Start Mission
            </button>
          </div>
        </section>
      ) : (
        <section className="game-screen">
  <div className="mission-header">
    <span className="rocket">🚀</span>

    <h2 className="mission-title">
      Mission
      <span className="mission-number">{mission}</span>
    </h2>
  </div>

          <p className="instruction">
            Find the letter
          </p>

          <div className="target-letter">
            {question.target}
          </div>

          <div className="answer-grid">
            {options.map((letter) => (
              <button
                key={letter}
                className="letter-btn"
                onClick={() => handleAnswer(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default App;