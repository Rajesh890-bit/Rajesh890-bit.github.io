import React from "react";
import Icon from "./icon";
import "./buttom.css";
import { Button } from "@chakra-ui/react";

export const ButtomGet = ({ resumeUrl, resumeFileName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = resumeFileName;
    link.target = "_blank"; // add this line
    link.click();
  };

  return <Button onClick={handleDownload}>Resume</Button>;
};
