import React from "react";
// import "../../pages/Project/ProjectPage.css";

/* react-bootstrap */
import { Flex, Link } from "@chakra-ui/react";
import styled from "styled-components";

import todolist1 from "../../Asset/fastDeal.png";
import todolist2 from "../../Asset/Naukri.png";
import todolist3 from "../../Asset/tataCliq.png";
import todolist4 from "../../Asset/Untitled design.png";

import { FormattedMessage } from "react-intl";
/* Img */
// const proyectImg = require.context("../../img", true);
const cardsData = [
  {
    imageSrc: todolist1,
    title: "Fast Deal ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tech_stack: [
      { skill: "HTML.png", w: "20px" },
      { skill: "CSS.png", w: "25px" },
      { skill: "Chakra ui.png", w: "25px" },
      { skill: "React.png", w: "25px" },
      { skill: "react-router.png", w: "25px" },
    ],

    netlify: "https://fastdeal1.vercel.app/",

    github:
      "https://github.com/KoushikNiyogi/hard-mist-4433/tree/fw21_0929_day-5",
  },
  {
    imageSrc: todolist2,
    title: "Naukri",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech_stack: [
      { skill: "HTML.png", w: "20px" },
      { skill: "CSS.png", w: "25px" },
      { skill: "Chakra ui.png", w: "25px" },
      { skill: "React.png", w: "25px" },
      { skill: "react-router.png", w: "25px" },
    ],

    netlify: "https://fastdeal1.vercel.app/",

    github:
      "https://github.com/KoushikNiyogi/hard-mist-4433/tree/fw21_0929_day-5",
  },
  {
    imageSrc: todolist3,
    title: "Tata Cliq",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tech_stack: [
      { skill: "HTML.png", w: "20px" },
      { skill: "CSS.png", w: "25px" },
      { skill: "Chakra ui.png", w: "25px" },
      { skill: "React.png", w: "25px" },
      { skill: "react-router.png", w: "25px" },
    ],

    netlify: "https://fastdeal1.vercel.app/",

    github:
      "https://github.com/KoushikNiyogi/hard-mist-4433/tree/fw21_0929_day-5",
  },
];

const Project = () => {
  return (
    <div className="proyectos" id="proyectos">
      <h2 className="heading">
        <FormattedMessage id="projects" defaultMessage="Projects" />
      </h2>

      <div>
        <Container>
          {cardsData.map((card, index) => (
            <Card key={index}>
              <Link
                className="project-deployed-link"
                isExternal
                href={card.netlify}
              >
                {" "}
                <Image src={card.imageSrc} />
              </Link>

              <Description>
                <Title>{card.title}</Title>
                <Text>{card.text}</Text>
              </Description>
              <Flex justifyContent={"space-between"}>
                {" "}
                <Link
                  className="project-github-link"
                  isExternal
                  href={card.github}
                >
                  {" "}
                  <Button>Git Hub</Button>
                </Link>
                <Link
                  className="project-deployed-link"
                  isExternal
                  href={card.netlify}
                >
                  {" "}
                  <Button>View Live</Button>
                </Link>
              </Flex>
            </Card>
          ))}
        </Container>
      </div>
    </div>
  );
};
export default Project;

const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  background-color: ${({ primary }) => (primary ? "#2E7D32" : "#FFFFFF")};
  color: ${({ primary }) => (primary ? "#FFFFFF" : "#0077FF")};

  &:hover {
    background-color: ${({ primary }) => (primary ? "#2E7D32" : "#81C784")};
    color: ${({ primary }) => (primary ? "#FFFFFF" : "#0077FF")};
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    width: 80%;
  }

  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Description = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #555;
`;

// const cardsData = [  {    imageSrc: 'https://via.placeholder.com/600x400',    title: 'Card 1',    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'  },  {    imageSrc: 'https://via.placeholder.com/600x400',    title: 'Card 2',    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  },  {    imageSrc: 'https://via.placeholder.com/600x400',    title: 'Card 3',    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'  },  {    imageSrc: 'https://via.placeholder.com/600x400',    title: 'Card 4',    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'  }];
