import React, { useState } from "react";
import cx from "clsx";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Chip from "@mui/material/Chip";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = (props) => {
  const { id, title, intro, img, href, tags } = props;
  return (
    <motion.div
      layoutId={id}
      style={{
        backgroundColor: "#fff",
        width: 280,
        height: 360,
        borderRadius: 20,
        boxShadow: "-6px 6px 36px 0 #bcc3d2",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <motion.img
        src={img}
        width="100%"
        height="200"
        alt=""
        style={{ objectFit: "cover" }}
      ></motion.img>
      <CardContent>
        <motion.div layout>
          <Typography gutterBottom variant="h6" align="center">
            {title}
          </Typography>
        </motion.div>
        <motion.div layout>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ height: 40 }}
          >
            {intro}
          </Typography>
        </motion.div>
      </CardContent>

      <CardActions>
        {tags.map((tag, index) => (
          <Chip label={tag} key={index} variant="outlined" size="small" />
        ))}
      </CardActions>
    </motion.div>
  );
};

export default ProjectCard;
