import { useState } from "react";
import data from "./data.js";
import "./styles/Cards.css";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards() {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [search, setSearch] = useState("");
  const handleSeeMore = (index) => {
    setVisibleIndex(index);
  };

  const handleClose = () => {
    setVisibleIndex(null);
  };

  console.log(typeof data);
  return (
    <>
      <Search setSearch={setSearch} />
      <div className="responsive-container-block">
        {data
          .filter((item) => {
            return search === ""
              ? item.fname
              : item.fname.toLowerCase().includes(search);
          })
          .map((item, index) =>  (
            <div className="cardd" key={index}>
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
                  <button className="close-button" onClick={handleClose}>
                    &times;
                  </button>
                  <div className="popup-content">
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
                      <p id="longText">📌 {item.longText}</p>
                    </div>

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
    </>
  );
}

function Search({ setSearch }) {
  return (
    <Form>
      <InputGroup className="my-3 m-auto w-50 ">
        <Form.Control
          className="border-4"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type Your Name"
        />
      </InputGroup>
    </Form>
  );
}
export default Cards;
