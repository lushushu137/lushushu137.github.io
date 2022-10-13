import React from "react";
import ReactDOM from "react-dom";
const ProjectDetail = () => {
  const content = <>hello</>;
  return ReactDOM.createPortal(
    content,
    document.getElementById("project-detail-portal")
  );
};

export default ProjectDetail;
