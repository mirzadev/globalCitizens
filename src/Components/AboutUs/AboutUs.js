import "./AboutUsStyles.css";
import GCHBackground from "../Assets/AboutUs/AboutPage-1.jpg";
import GCH_Reaction_1 from "../Assets/AboutUs/AboutPage-2.jpg";
import GCH_Reaction_2 from "../Assets/AboutUs/AboutPage-3.jpg";
import GCH_Reaction_3 from "../Assets/AboutUs/AboutPage-4.jpg";
import GCH_Reaction_4 from "../Assets/AboutUs/AboutPage-5.jpg";
function AboutUs() {
  return (
    <div className="about-container">
      <h1>GLOBAL CITIZENS FOR HUMANITY</h1>
      <p>
        Extend hands, help the needs and spread the message of humanity across
        the globe
      </p>
      <h2>Who We Are</h2>
      <div className="background-des">
        <div className="background-text">
          <p>
            Global Citizens for Humanity Inc. is a Florida-based nonprofit
            organization established in 2018 consisting of members of the
            diverse community with the goal to “Protect, Progress, and Preserve
            the Prosperity of Humanity” through actively participating in
            humanitarian efforts for local communities as well as victims of
            national and international natural disasters and refugees of many
            origins. We are helping in engaging youngsters in awareness and
            hands-on experience in preserving their planet. We are promoting and
            planting trees even on a very small scale in mitigating global
            warming and climate control. Global Citizens for Humanity is engaged
            in mental awareness of children to combat post pandemic mental
            health crisis. The organization is enriched by all dedicated
            personalities towards humanity.
          </p>
        </div>
        <div className="background-image">
          <img alt="img" src={GCHBackground} />
        </div>
      </div>

      <div className="gch-reaction">
        <h2>When We Do</h2>
        <p>
          Global Citizens For Humanity is always dedicated to serve against any
          global need. This includes natural calimities, disasters, humanitarian
          needs, marine debris, environmental effect etc. Any time any incident
          takes place, GCH are always there with helping hands without delay.
        </p>
        <div className="about-reaction_image">
          <img alt="img" src={GCH_Reaction_1} />
          <img alt="img" src={GCH_Reaction_2} />
        </div>
      </div>

      <div className="gch-reaction">
        <h2>How Do We Get Funds</h2>
        <p>
          GCH members are fully dedicated for helping the community. During any
          need GCH first fund comes from the members. These are mainly from
          annual subscriptions and member's donation before any activities.
          However, due to the trust earned by GCH to the community, many times
          community peoples comes forward and donate in terms of funds or
          materials. While doing we always try to use our own experties to
          minimize the cost and thereby donate more towards humanity.
        </p>
        <div className="about-reaction_image">
          <img alt="img" src={GCH_Reaction_3} />
          <img alt="img" src={GCH_Reaction_4} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
