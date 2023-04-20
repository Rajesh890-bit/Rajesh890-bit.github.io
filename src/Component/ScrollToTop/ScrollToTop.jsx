import React from "react";
import { useEffect, useState } from "react";
// import { BsFillArrowUpCircleFill } from "react-icons/all-files/fa/BsFillArrowUpCircleFill";
import { FaAngleUp } from "react-icons/fa";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [backToTopButtom, setBackTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackTopButton(true);
      } else {
        setBackTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {backToTopButtom && (
        <button
          className="cm-up"
          onClick={scrollUp}
          style={{ backgroundColor: "rgb(0, 255, 162)" }}
        >
          <span className="cm-icon">
            <FaAngleUp />
          </span>
        </button>
      )}
    </div>
  );
};

export default React.memo(ScrollToTop);
