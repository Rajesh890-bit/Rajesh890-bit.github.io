import { Box, Text, Image, VStack, Heading } from "@chakra-ui/react";

import GitHubCalendar from "react-github-calendar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TextAnimationOnHover from "./TextAnimationOnHover";
export const GithubStats = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box pb="50px" style={{ textAlign: "center" }}>
      <Heading color="rgb(6, 246, 50);" fontSize={35}>
        {" "}
        <Text as="span" color="white">
          <TextAnimationOnHover text="Github" />
        </Text>{" "}
        <TextAnimationOnHover text={"Calender"} />
      </Heading>

      <VStack
        data-aos="fade-right"
        data-aos-duration="1500"
        mt="70px"
        padding={"2.7rem"}
        borderRadius={"18px"}
        backdropFilter="blur(10px)"
        backgroundColor="rgba(255, 255, 255, 0.3)"
      >
        <GitHubCalendar
          class="react-activity-calendar"
          username="rajesh890-bit"
          w={"98%"}
        ></GitHubCalendar>
      </VStack>

      <Heading mt="50px" color="rgb(6, 246, 50);" fontSize={35}>
        {" "}
        <Text as="span" color="white">
          <TextAnimationOnHover text={"Github"} />
        </Text>{" "}
        <TextAnimationOnHover text={"Stats"} />
      </Heading>

      <VStack mt="70px" data-aos="fade-left" data-aos-duration="1500">
        <Image
          id="github-stats-card"
          borderRadius="20px"
          w={"auto"}
          margin={"2rem 2rem"}
          padding={"1rem"}
          alt="Rajesh Pradhan"
          src="https://github-readme-stats.vercel.app/api?username=rajesh890-bit&include_all_commits=true&count_private=true&show_icons=true&line_height=20&title_color=7A7ADB&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40"
        ></Image>
      </VStack>

      <Heading mt="50px" color="rgb(6, 246, 50);" fontSize={35}>
        {" "}
        <Text as="span" color="white">
          <TextAnimationOnHover text={"Github"} />
        </Text>{" "}
        <TextAnimationOnHover text={"Streaks"} />
      </Heading>

      <VStack mt="70px" data-aos="fade-right" data-aos-duration="1500">
        <Image
          id="github-streak-stats"
          w={"auto"}
          margin={"2rem 2rem"}
          borderRadius="20px"
          src="https://github-readme-streak-stats.herokuapp.com/?user=rajesh890-bit&theme=blue-green&hide_border=true"
        ></Image>
      </VStack>

      <Heading mt="50px" color="rgb(6, 246, 50);" fontSize={35}>
        {" "}
        <Text as="span" color="white">
          <TextAnimationOnHover text={"Github"} />
        </Text>{" "}
        <TextAnimationOnHover text={"Languages"} />
      </Heading>

      <VStack mt="70px" data-aos="fade-left" data-aos-duration="1500">
        <Image
          id="github-top-langs"
          w={"auto"}
          borderRadius="20px"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=rajesh890-bit&theme=blue-green&hide_border=true&include_all_commits=true&count_private=true&layout=compact"
        ></Image>
      </VStack>

      <Heading mt="50px" color="rgb(6, 246, 50);" fontSize={35}>
        {" "}
        <Text as="span" color="white">
          📊 <TextAnimationOnHover text={"Github"} />
        </Text>{" "}
        <TextAnimationOnHover text={"Trophies"} />
      </Heading>

      <VStack mt="70px" data-aos="fade-right" data-aos-duration="1500">
        <div align="center">
          <p align="center">
            {" "}
            <img
              src="https://github-profile-trophy.vercel.app/?username=rajesh890-bit&theme=juicyfresh"
              alt="rajesh890-bit"
            />
          </p>
          <br />
        </div>
      </VStack>
    </Box>
  );
};
