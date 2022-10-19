import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDetail from "../components/ProjectDetail";
import { dataList } from "../data/projectList";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="body2" align="center" sx={{ p: 5 }}>
        Hello, my name is Lu Shu. I am a web developer. I also like making
        games. These are craps I made.
      </Typography>

      <Box
        width="80%"
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        gap="50px"
        justifyContent="center"
      >
        {dataList.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => {
              document.body.style.overflow = "hidden";
              setSelectedId(project.id);
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <ProjectDetail
              {...dataList.find((data) => data.id === selectedId)}
              onClose={() => {
                document.body.style.overflow = "scroll";
                setSelectedId(null);
              }}
            />
          )}
        </AnimatePresence>
      </Box>
    </div>
  );
};

export default Projects;
