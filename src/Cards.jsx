import { useState } from "react";
import data from "./data.js";
import "./styles/Cards.css";

function Cards() {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const handleSeeMore = (index) => {
    setVisibleIndex(index);
  };

  const handleClose = () => {
    setVisibleIndex(null);
  };

  return (
    <div className="responsive-container-block">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <img className="quote-svg" src="/quote.svg" alt="Quote Icon" />
          <p className="lastword">{item.lastword}</p>
          <div className="name-container">
            <div>
              <p className="name">{item.fname}</p>
              <p className="position">{item.lname}</p>
            </div>
            <div className="photo">
              <img src={`/${item.photo}`} alt={`Photo of ${item.fname}`} />
            </div>
          </div>

          <button
            style={{ backgroundColor: "rgb(233, 155, 54)" }}
            onClick={() => handleSeeMore(index)}
          >
            See More
          </button>

          {visibleIndex === index && (
            <div className="popup-overlay active">
              {" "}
              {/* Added 'active' class */}
              <button className="close-button" onClick={handleClose}>
                &times;
              </button>
              <div className="popup-content">
                {/* Profile description */}
                <div className="profile-description">
                  <div>
                    <img
                      src={`/${item.photo}`}
                      alt={`Photo of ${item.fname}`}
                    />
                  </div>
                  <div>
                    <p className="name">{item.fname}</p>
                    <p className="position">{item.lname}</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, explicabo. Debitis consectetur, vitae
                    perferendis minus soluta nulla tenetur ut dolores esse est
                    fugiat quibusdam delectus! Consectetur nulla animi veniam!
                    In.
                  </p>
                </div>
                {/* Images grid */}
                <div className="popup-images">
                  {item.sampleImages &&
                    item.sampleImages.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={`/${image}`}
                        alt={`Sample ${imgIndex + 1}`}
                      />
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Cards;
