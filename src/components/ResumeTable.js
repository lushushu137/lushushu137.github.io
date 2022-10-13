import React from "react";
import "./ResumeTable.css";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import resume from "../assets/pdf/Frontend Developer_Lu_Shu.pdf";
const ResumeTable = () => {
  return (
    <div className="resume-table">
      <Button
        startIcon={<DownloadIcon />}
        color="primary"
        onClick={() => {
          const link = document.createElement("a");
          link.download = "Frontend Developer_Lu_Shu";
          link.href = resume;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
        Download
      </Button>
    </div>
  );
};

export default ResumeTable;
