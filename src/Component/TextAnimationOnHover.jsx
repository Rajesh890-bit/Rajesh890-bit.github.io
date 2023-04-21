import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const TextAnimationOnHover = ({ text }) => {
  const rubberAnimation = keyframes`
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.25) rotate(-5deg);
    }
    50% {
      transform: scale(0.75) rotate(5deg);
    }
    70% {
      transform: scale(1.15) rotate(-3deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  `;

  return (
    <Box
      as="span"
      display="inline-block"
      position="relative"
      _hover={{
        cursor: "pointer",
      }}
    >
      {text.split("").map((letter, index) => (
        <Box
          key={index}
          as="span"
          display="inline-block"
          _hover={{
            animation: `${rubberAnimation} 0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
          }}
        >
          {letter}
        </Box>
      ))}
    </Box>
  );
};

export default TextAnimationOnHover;
