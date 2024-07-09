import "./styles/FilterButtons.css";
function FilterButtons({ onFilter }) {
  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <div className="filter-buttons">
      {letters.map((letter) => (
        <button key={letter} onClick={() => onFilter(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;

/**
 * import "./styles/FilterButtons.css";
function FilterButtons({ onFilter }) {
  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <div className="filter-buttons">
      {letters.map((letter) => (
        <button key={letter} onClick={() => onFilter(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;


i want to add a stste for oncliick of each button i want to set that state to the letter in the button 

exapm le if user clicks D, i want to set state as D and if use clicks E i want to set state as E 

so that later i can create  a filter option for my cards
 */
