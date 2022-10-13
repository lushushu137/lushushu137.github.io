import React from "react";
import ResumeTable from "../components/ResumeTable";
import { Typography } from "@mui/material";
const Resume = () => {
  return (
    <>
      <Typography variant="body2" align="center" sx={{ p: 5 }}>
        This page is still under construction. <br />
        I'm trying to render resume directly on this page. <br />
      </Typography>
      <Typography variant="body2" align="center">
        Before I finishing that, you can just click DOWNLOAD for my resume.
      </Typography>
      <ResumeTable />
    </>
  );
};

export default Resume;
