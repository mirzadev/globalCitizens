import "./HomeMainStyles.css";
import HomeMainData from "./HomeMainData";
import homeMain_1 from "../Assets/Home/GCH_home-1.jpg";
import homeMain_2 from "../Assets/Home/GCH_home-2.jpg";
import homeMain_3 from "../Assets/Home/GCH_home-3.jpg";
import GCHObjectives from "../Assets/Home/GCH_home-4.jpg";
import GCHObjectives_1 from "../Assets/Home/GCH_home-5.jpg";
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
        text="Global Citizens for Humanity (GCH) is a charitable and educational non-profit organization that was established in 2018 under section 501(c)(3) of the Internal Revenue Code by a few dedicated professionals towards humanity. Since inception GCH has been engaged towards addressing any humanitarian needs in the world irrespective of nationality, religion, or color. Its' mission, vision and objectives are aimed at achieving all kinds of responses within capacity towards humanity covering natural calamities, environmental disaster, or political / racial issues."
        img1={homeMain_1}
        img2={homeMain_2}
        img3={homeMain_3}
      />
      <h2 className="Objective-heading">GCH Mission, Vision And Objective</h2>
      <div className="objective-des">
        <div className="objective-text">
          <p>
            Global Citizens for Humanity envisions a united world irrespective
            of race, religion, color, ethnicity, or gender differences to help
            reduce and combat inequality, unfair competition, war, famine,
            refugee crises, climate disasters, and economic poverty. With this
            vision ahead, GCH has following objectives:
          </p>
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
                teachers, and the community at large.
              </li>
              <li>
                Help coordinate available resources for youngsters in building
                their careers, occupation, and their livelihood.
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
