import * as React from "react";
import cx from "clsx";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Chip from "@mui/material/Chip";
const ProjectCard = (props) => {
  const { title, intro, img, href, tags } = props;
  return (
    <Card
      sx={{
        width: 280,
        height: 360,
        borderRadius: 4,
        boxShadow: "-6px 6px 36px 0 #bcc3d2",
      }}
    >
      <Link href={href} underline="none" target="_blank">
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={img}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h6" align="center">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ height: 40 }}>
          {intro}
        </Typography>
      </CardContent>
      <CardActions>
        {tags.map((tag, index) => (
          <Chip label={tag} key={index} variant="outlined" size="small" />
        ))}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
