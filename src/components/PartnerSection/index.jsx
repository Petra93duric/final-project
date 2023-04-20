import React, { useEffect, useState } from "react";
import "./partner-section.css";
import amazonIcon from "../../Company logos/amazon-color.svg";
import androidIcon from "../../Company logos/android-color.svg";
import appleIcon from "../../Company logos/apple-color.svg";
import facebookIcon from "../../Company logos/facebook-color.svg";
import githubIcon from "../../Company logos/github-color.svg";
import googleIcon from "../../Company logos/google.svg";
import redditIcon from "../../Company logos/reddit-color.svg";
import spotifyIcon from "../../Company logos/spotify-color.svg";
import stackoverflowIcon from "../../Company logos/stackoverflow-color.svg";
import tinderIcon from "../../Company logos/tinder-color.svg";
import twitterIcon from "../../Company logos/twitter-color.svg";

const PartnerSection = () => {
  const [numb, setNumb] = useState(0);

  const logos = [
    amazonIcon,
    androidIcon,
    appleIcon,
    facebookIcon,
    githubIcon,
    googleIcon,
    redditIcon,
    spotifyIcon,
    stackoverflowIcon,
    tinderIcon,
    twitterIcon,
  ];

  const fiveLogos = logos.filter((e, i) => i >= 0 + numb && i < 5 + numb);

  function goNext() {
    setNumb(numb + 1);
    if (numb === 6) {
      setNumb(0);
    }
  }

  function goPrev() {
    setNumb(numb - 1);
    if (numb === 0) {
      setNumb(6);
    }
  }

  return (
    <div className="div-partner">
      <button onClick={goPrev}> &lt;</button>
      {fiveLogos.map((e) => (
        <div className="div-one-partner">
          <img src={e} />
        </div>
      ))}
      <button onClick={goNext}> &gt; </button>
    </div>
  );
};

export default PartnerSection;
