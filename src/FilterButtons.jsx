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
