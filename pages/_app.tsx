import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import "../public/css/styles.css";
import { HomeComponent } from "../src/components/HomeComponent";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <HomeComponent />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
