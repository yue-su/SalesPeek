import { Typography, Button, Link } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import ProductHeroLayout from "../layout/HeroLayout";

const backgroundImage =
  "https://images.unsplash.com/photo-1595411425732-e69c1abe2763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2001&q=80";

const Hero = () => {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="Hero loading"
      />
      <Typography variant="h2" gutterBottom>
        Keep track of your fav items
      </Typography>
      <Typography variant="h5" gutterBottom>
        Support online sales platform: Amazon, uniqlo, lululemon, etc
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        sx={{ minWidth: 200 }}
      >
        <Link component={NavLink} underline="none" to="/signup">
          Register
        </Link>
      </Button>
    </ProductHeroLayout>
  );
};

export default Hero;
