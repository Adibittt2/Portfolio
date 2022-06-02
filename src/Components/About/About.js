import React from "react";
import Avatar from "@mui/material/Avatar";
import { Image, ContactWrapper } from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">
          <div
            style={{
              fontSize: "40px",
              fontFamily: "'Trebuchet MS', sans-serif",
            }}
          >
            Contact Me
          </div>
          <hr
            style={{
              marginLeft: "5px",
              width: "177px",
              background: "#d24d57",
            }}
          />
        </div>
        <div className="BigCard">
          <Image>
            <Avatar
              alt="Remy Sharp"
              src="/images/AdityaProfile.jpeg"
              sx={{ width: 150, height: 150 }}
            />
          </Image>
          <div className="AboutBio">
            <div
              style={{
                fontSize: "28px",
                fontFamily: "'Trebuchet MS', sans-serif",
              }}
            >
             Contact me Here...
            </div>
            <p style={{ fontWeight: "500" }}>I am from Koderma, Jharkhand.</p>
            <p style={{ fontWeight: "500" }}>Phone - 8229839930</p>
            <p style={{ fontWeight: "500" }}>Email - adityaverma00796@gmail.com</p>
            
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
