import "./GchActivityStyles.css";
import PititionCollection from "../Assets/Activity/rohingya-1.jpg";
import GCH_Pitition from "../Assets/Activity/rohingya-2.jpg";
import GCHMedicineSp from "../Assets/Activity/rohingya-3.jpg";
import DrinkingWater1 from "../Assets/Activity/rohingya-4.jpg";
import DrinkingWater2 from "../Assets/Activity/rohingya-5.jpg";
import RetailSecurity1 from "../Assets/Activity/retailSecurity-1.jpg";
import RetailSecurity2 from "../Assets/Activity/retailSecurity-2.jpg";
function GchActivity() {
  return (
    <div className="activity-container">
      <h1>GCH Activities</h1>
      <p>Always beside the Humanity</p>
      <h2>Petition Signing and Fundraising for Rohingya Crisis</h2>
      <div className="rohingya-des">
        <div className="rohingya-text">
          <p>
            Donating medicine to Rohingys Refugees was the first activities of
            Global Citizens for Humanity with the help of Bangladesh Army. GCH
            members collected funds from their own members and donated medicine
            for about 350,000.00 Taka. The medicine was purchased from
            Bangladesh and coordination was done with Bangladesh Army medical
            team who assisted with free prescription and medicine provided by
            GCH.The medicine was purchased from Bangladesh and coordination was
            done with Bangladesh Army medical team who assisted with free
            prescription and medicine provided by GCH.The medicine was purchased
            from Bangladesh and coordination was done with Bangladesh Army
            medical team who assisted with free. from Bangladesh and
            coordination was done with Bangladesh .
          </p>
        </div>
        <div className="rohingya-image">
          <img alt="img" src={PititionCollection} />
        </div>
      </div>

      <h2 className="pitition-header" center>
        Petition Submission
      </h2>
      <div className="pitition-des">
        <div className="pitition-image">
          <div>
            <img alt="img" src={GCH_Pitition} />
          </div>
        </div>
        <div className="pitition-text">
          <p>
            Global Citizens for Humanity Inc. is a Florida-based nonprofit
            organization established in 2018 consisting of members of the
            diverse community with the goal to “Protect, Progress, and Preserve
            the Prosperity of Humanity” through actively participating in
            humanitarian efforts for local communities as well as victims of
            national and international natural disasters and refugees of many
            origins.Global Citizens for Humanity Inc. is a Florida-based
            nonprofit organization established in 2018 consisting of members of
            the diverse community with the goal to “Protect, Progress, and
            Preserve the Prosperity of Humanity” through actively participating
            in humanitarian efforts for local communities as well as victims of
            national and international natural disasters and refugees of many
            origins.
          </p>
        </div>
      </div>
      <h2 className="rohingya-header" center>
        Medicine Support to Rohingya
      </h2>
      <div className="rohingya-des">
        <div className="rohingya-text">
          <p>
            Donating medicine to Rohingys Refugees was the first activities of
            Global Citizens for Humanity with the help of Bangladesh Army. GCH
            members collected funds from their own members and donated medicine
            for about 350,000.00 Taka. The medicine was purchased from
            Bangladesh and coordination was done with Bangladesh Army medical
            team who assisted with free prescription and medicine provided by
            GCH.The medicine was purchased from Bangladesh and coordination was
            done with Bangladesh Army medical team who assisted with free
            prescription and medicine provided by GCH.The medicine was purchased
            from Bangladesh and coordination was done with Bangladesh Army
            medical team who assisted with free.
          </p>
        </div>
        <div className="rohingya-image">
          <img alt="img" src={GCHMedicineSp} />
        </div>
      </div>

      <h2 className="pitition-header" center>
        Drinking Water for Rohingya
      </h2>
      <div className="pitition-des">
        <div className="pitition-image">
          <div>
            <img alt="img" src={DrinkingWater1} />
          </div>
        </div>
        <div className="pitition-image-1">
          <div>
            <img alt="img" src={DrinkingWater2} />
          </div>
        </div>
        <div className="pitition-text">
          <p>
            Besides the health issues, drinking water supply was another
            important issues for Rohingya Refugees specially the children. GCH
            came forward to arrange safe drinking water in limited scale within
            their capacity. President of GCH personally visited the camp and
            extended the required help to the need in terms of drinking water.
          </p>
        </div>
      </div>
      <h2 className="rohingya-header" center>
        Retail Security Awareness Training
      </h2>
      <div className="rohingya-des">
        <div className="rohingya-text">
          <p>
            Besides the health issues, drinking water supply was another
            important issues for Rohingya Refugees specially the children. GCH
            came forward to arrange safe drinking water in limited scale within
            their capacity. President of GCH personally visited the camp and
            extended the required help to the need in terms of drinking water.
          </p>
        </div>
        <div className="retailSecurity-image-1">
          <img alt="img" src={RetailSecurity1} />
        </div>
        <div className="retailSecurity-image-2">
          <img alt="img" src={RetailSecurity2} />
        </div>
      </div>
    </div>
  );
}

export default GchActivity;
