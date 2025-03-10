import React from "react";
import { useDrag } from "react-dnd";

// Define letter scores first
const getLetterScore = (letter) => {
  const scores = { A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10 };
  return scores[letter] || 0;
};

const ScrabbleLetter = ({ id, letter, position }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TILE",
    item: { id, letter, position },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="letter-tile" style={{ opacity: isDragging ? 0.5 : 1 }}>
      <span className="letter">{letter}</span>
      <span className="tile-score">{getLetterScore(letter)}</span>
    </div>
  );
};

export default ScrabbleLetter;
