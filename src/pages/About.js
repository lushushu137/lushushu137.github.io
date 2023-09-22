import React from "react";
import { Typography, Avatar } from "@mui/material";
import myPic from "../assets/image/myAvatar.png";

const About = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src={myPic}
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          objectFit: "cover",
          marginTop: 20,
        }}
        alt="beautiful me but you can't see"
      />
      <br />
      <br />

      <Typography variant="body2" align="center" gutterBottom>
        My name is Lu Shu. I am familiar with frontend development, especially
        React toolchain.
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        I just achieved my master degree from Multimedia and Entertainment
        Techonology at PolyU.
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        Glad to see you.
      </Typography>
      <br />
      <br />

      <Typography variant="body2" align="center" gutterBottom>
        Email: lushu100fen@gmail.com
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        Tel: (+852) 65393681 | (+86) 17801076632
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        Hong Kong | Shanghai
      </Typography>
    </div>
  );
};

export default About;
