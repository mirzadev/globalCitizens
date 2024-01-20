import "./HomeMainStyles.css";
import HomeMainData from "./HomeMainData";
import homeMain_1 from "../Assets/Home/GCH_home-1.jpg";
import homeMain_2 from "../Assets/Home/GCH_home-2.jpg";
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
        text="Global Citizens for Humanity (GCH) is a charitable and educational non-profit organization founded in 2018 under section 501(c)(3) of the Internal Revenue Code by a group of dedicated professionals committed to advancing the well-being of humanity. Since its inception, GCH has tirelessly dedicated itself to addressing humanitarian needs worldwide, transcending boundaries of nationality, religion, and color. The organization's mission, vision, and objectives are centered on eliciting a diverse range of responses within its capacity to address various humanitarian challenges, including but not limited to natural calamities, environmental disasters, and political or racial issues. GCH strives to create a positive and lasting impact on the global community, promoting unity, compassion, and support for those in need."
        img1={homeMain_1}
        img2={homeMain_2}
      />
      <h2 className="Objective-heading">GCH Mission, Vision And Objective</h2>
      <div className="objective-des">
        <div className="objective-image">
          <img alt="img" src={GCHObjectives} />
          <img alt="img" src={GCHObjectives_1} />
        </div>
        <div className="objective-text">
          <p>
            Global Citizens for Humanity envisions a world united beyond the
            divisions of race, religion, color, ethnicity, or gender. The
            organization is dedicated to actively contributing towards the
            reduction and combating of inequality, unfair competition, war,
            famine, refugee crises, climate disasters, and economic poverty.
            With a commitment to fostering global solidarity, GCH strives to
            create a future where humanity stands together in addressing these
            pressing challenges. Through advocacy, support, and collaborative
            efforts, the organization aims to build bridges of understanding and
            compassion, promoting a shared responsibility for creating a more
            just, equitable, and harmonious world for all.
          </p>
          <p className="objective-intro">
            The objectives of Global Citizens for Humanity (GCH) encompass a
            comprehensive approach to addressing various humanitarian
            challenges.
          </p>
          <p className="objective-list">
            <ul>
              <li>
                GCH is committed to actively participating in aiding refugees
                affected by war, famine, economic hardship, and environmental
                reasons by providing essential support such as financial
                assistance, medical care, emotional and social support,
                training, skills development, and job placement.
              </li>
              <li>
                Additionally, the organization aims to extend assistance to
                victims of natural disasters on both national and international
                levels.GCH places a strong emphasis on environmental
                consciousness, working to promote awareness and protective
                measures against industrial pollution to preserve our planet.
              </li>
              <li>
                The organization is dedicated to fostering mental health
                awareness among children, parents, teachers, and the broader
                community.
              </li>
              <li>
                Furthermore, GCH seeks to coordinate available resources to
                empower young individuals in building their careers,
                occupations, and livelihoods.
              </li>
              <li>
                Through fundraising activities, provision of factual
                information, and the promotion of local and international
                networking, GCH endeavors to contribute to the collective
                prosperity and well-being of humanity.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
