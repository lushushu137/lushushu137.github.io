import React from "react";
import ReactDOM from "react-dom";
import "./ProjectDetail.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import { Divider, Link, IconButton } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ProjectDetail = (props) => {
  const isMobile = "ontouchstart" in document.documentElement;
  const { id, title, intro, href, img, background, onClose, techstack, gifs } =
    props;
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      className="project-detail__backdrop"
      onClick={onClose}
    >
      <motion.div
        layoutId={id}
        className="project-detail__card"
        style={{ borderRadius: 20 }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="project-detail-left">
          <div className="project-detail-left__title">
            {isMobile ? (
              <Typography gutterBottom variant="h4" align="center">
                {title}
              </Typography>
            ) : (
              <Link
                href={href}
                underline="none"
                color="primary"
                target="_blank"
              >
                <Typography gutterBottom variant="h4" align="center">
                  {title}
                  <OpenInNewIcon className="project-detail-left__link-icon" />
                </Typography>
              </Link>
            )}
          </div>

          <div className="project-detail-left__intro">
            <Typography variant="body2" color="text.secondary">
              {intro}
            </Typography>
          </div>
          <div className="project-detail-left__gifs">
            {gifs.map((gif, index) => (
              <motion.img src={gif} width="80%" alt="" key={index} />
            ))}
          </div>
        </div>
        <div className="project-detail-right">
          <div className="project-detail-right__background">
            <Typography gutterBottom variant="h6">
              Background
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              {background}
            </Typography>
          </div>
          {techstack.length > 0 && (
            <>
              <Divider />
              <div className="project-detail-right__techstack">
                <Typography gutterBottom variant="h6">
                  Technology
                </Typography>
                {techstack.map((tech, index) => (
                  <div key={index}>
                    <Typography gutterBottom variant="body1">
                      {tech.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="text.secondary"
                    >
                      {tech.intro}
                    </Typography>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <IconButton
          color="primary"
          className="project-detail__close"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
