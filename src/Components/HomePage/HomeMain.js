import "./HomeMainStyles.css";
import HomeMainData from "./HomeMainData";
import homeMain_1 from "../Assets/Home/GCH_home-1.jpg";
import homeMain_2 from "../Assets/Home/GCH_home-2.jpg";
import homeMain_3 from "../Assets/Home/GCH_home-3.jpg";
import GCH_Mission from "../Assets/Home/GCH_home-4.jpg";
import GCHObjectives from "../Assets/Home/GCH_home-5.jpg";
import GCHObjectives_1 from "../Assets/Home/GCH_home-6.jpg";
const HomeMain = () => {
  return (
    <div className="HomeMain">
      <h1>GLOBAL CITIZENS FOR HUMANITY</h1>
      <p>
        Extend hands, help the needs and spread the message of humanity across
        the globe
      </p>
      <h2>GCH Overview</h2>
      <HomeMainData
        text="Global Citizens for Humanity (GCH) is a charitable and educational non profit organization under section 501(c)(3) of the Internal Revenue Code. No part of GCH net earnings shall inure to the benefit of, or be distributable to its members, trustees, officers, or other private persons, except that the corporation shall be authorized and empowered to pay reasonable compensation for services rendered and to make payments and distributions in furtherance for the purposes set forth in the purpose clause hereof."
        img1={homeMain_1}
        img2={homeMain_2}
        img3={homeMain_3}
      />

      <div className="mission-des">
        <div className="mission-image">
          <div>
            <img alt="img" src={GCH_Mission} />
          </div>
        </div>
        <div className="mission-text">
          <h2>GCH Mission & Vision</h2>
          <p>
            Global Citizens for Humanity Inc. is a Florida-based nonprofit
            organization established in 2018 consisting of members of the
            diverse community with the goal to “Protect, Progress, and Preserve
            the Prosperity of Humanity” through actively participating in
            humanitarian efforts for local communities as well as victims of
            national and international natural disasters and refugees of many
            origins. Vision & Mission:
          </p>
          <p className="GCH-mission-vission">
            Global Citizens for Humanity envisions a united world irrespective
            of race, religion, color, ethnicity or gender differences to help
            reduce and combat inequality, unfair competition, war, famine,
            refugee crises, climate disasters, and economic poverty.
          </p>
        </div>
      </div>

      <div className="objective-des">
        <div className="objective-text">
          <h2>GCH Objectives</h2>
          <p>
            <ul className="objective-list">
              <li>
                Active participation in helping the refugees of war, famine,
                economic and environmental reasons by providing monitory,
                medical, emotional, social, training skill and job support.
              </li>
              <li>
                Active participation in helping victims of Natural disasters of
                national or international locations.
              </li>
              <li>
                Promote environmental awareness and protection measures from
                industrial pollution in preserving our planet.
              </li>
              <li>
                Promote mental health awareness among children, parents,
                teachers and the community at large.
              </li>
              <li>
                Help coordinate available resources for youngsters in building
                their careers, occupation and their livelihood.
              </li>
              <li>
                Fund raising activities raise for charitable humanitarian needs.
              </li>
              <li>
                Provide facts, statistics and other related data for awareness
                and solutions of humanitarian issues.
              </li>
              <li>
                Promote local and international networking in achieving common
                goals for prosperity of humanity.
              </li>
            </ul>
          </p>
        </div>
        <div className="objective-image">
          <img alt="img" src={GCHObjectives} />
          <img alt="img" src={GCHObjectives_1} />
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
