import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { dataList } from "../data/projectList";

const Projects = () => {
  return (
    <>
      <Typography variant="body2" align="center" sx={{ p: 5 }}>
        Hello, my name is Lu Shu. I am a web developer. I also like making
        games. These are craps I made.
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        gap="30px"
        justifyContent="center"
      >
        {dataList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Box>
    </>
  );
};

export default Projects;
