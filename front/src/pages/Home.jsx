import React from "react";
import SectionFour from "../components/Home/SectionFour";
import SectionOne from "../components/Home/SectionOne";
import SectionThree from "../components/Home/SectionThree";
import SectionTwo from "../components/Home/SectionTwo";
import {Helmet} from "react-helmet";

function Home() {
  return (
    <div>
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </div>
  );
}

export default Home;
