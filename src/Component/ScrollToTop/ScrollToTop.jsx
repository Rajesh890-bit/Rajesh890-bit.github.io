import React from "react";
import { useEffect, useState } from "react";
// import { BsFillArrowUpCircleFill } from "react-icons/all-files/fa/BsFillArrowUpCircleFill";
import { FaAngleUp } from "react-icons/fa";
import "./ScrollToTop.css";
import { Tooltip } from "@chakra-ui/react";
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
        <Tooltip hasArrow label="Click here to redirect Top" bg="black">
          <button className="cm-up" onClick={scrollUp}>
            <span className="cm-icon">
              <FaAngleUp />
            </span>
          </button>
        </Tooltip>
      )}
    </div>
  );
};

export default React.memo(ScrollToTop);
