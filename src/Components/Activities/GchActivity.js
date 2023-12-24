import "./GchActivityStyles.css";
import PititionCollection from "../Assets/Activity/rohingya-1.jpg";
import GCH_Pitition from "../Assets/Activity/rohingya-2.jpg";
import GCHMedicineSp from "../Assets/Activity/rohingya-3.jpg";
import DrinkingWater1 from "../Assets/Activity/rohingya-4.jpg";
import DrinkingWater2 from "../Assets/Activity/rohingya-5.jpg";
import HurricaneMichael1 from "../Assets/Activity/HuricaneMichael-1.jpg";
import HurricaneMichael2 from "../Assets/Activity/HuricaneMichael-2.jpg";
import MotherLang1 from "../Assets/Activity/motherlang-1.jpg";
import MotherLang2 from "../Assets/Activity/motherlang-2.jpg";
import RetailSecurity1 from "../Assets/Activity/retailSecurity-1.jpg";
import RetailSecurity2 from "../Assets/Activity/retailSecurity-2.jpg";
import FoodDorian1 from "../Assets/Activity/dorian-1.jpg";
import FoodDorian2 from "../Assets/Activity/dorian-2.jpg";
function GchActivity() {
  return (
    <div className="activity-container">
      <h1>GCH Activities</h1>
      <p>Always beside the Humanity</p>
      <h2>Petition Signing and Fundraising for Rohingya Crisis</h2>
      <div className="rohingya-des">
        <div className="rohingya-text">
          <p>
            Due to the atrocity and armed conflict since August 2017 in Rakhine
            State of Myanmar, the Rohingya people fled and seek refugee across
            the border in Bangladesh. They are Muslim by religion and the
            military ruler of Myanmar denied their citizenship. After entering
            Myanmar, the Bangladesh Government accepted them as refugee and
            extended all out support in the southern part of the country in Coxs
            Bazar district. GCH, being a humanitarian organization, raised their
            voice for humanity. They collected petition from thousands of the
            peoples the community to submit to congress man for further action
            against Myanmar ruler. In this process most of the people in South
            Florida willingly signed our petition to support this noble cause
            against military rulers in Myanmar.
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
            After collection of signatures from the community people in the
            petition to do justice with the Rohingya refugees in Bangladesh,
            members of Global Citizens for Humanity along with community leaders
            contacted the local Congressman Ted Deutch and Congresswomen Lois
            Frankel of the 22nd Congressional district of Florida. The
            congressional district office gladly accepted the petition and
            raised their voice in US Congress against military atrocity of
            Myanmar dictators. Later on, a resolution was passed in 116th US
            congress expressing the sense of the Senate that the Governments of
            Burma and Bangladesh ensure the safe, dignified, voluntary, and
            sustainable return of the Rohingya refugees who have been displaced
            by the campaign of ethnic cleansing conducted by the Burmese
            military.
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
        Assistance to Hurricane Michael Victims
      </h2>
      <div className="hurricane-des">
        <div className="hurricane-michael">
          <div className="hurricane-text">
            <p>
              Major Hurricane Michael was the 13th named storm of the 2018
              Atlantic Hurricane Season. So far, there have been 15 named storms
              during the 2018 Atlantic Hurricane Season - 7 tropical storms and
              8 hurricanes. Two of those eight hurricanes strengthened into a
              major hurricane: Florence and Michael.Michael was the strongest
              hurricane on record to make landfall in the Florida panhandle with
              maximum sustained wind of 160 mph and a minimum pressure of 919
              mb.
            </p>
            <p>
              GCH immediate responded and stood beside affected people with the
              generous donation from all members of the organization. To
              effectively help the need, the donation was sent to the affected
              people with the help of American Red Cross.
            </p>
          </div>
          <div className="hurricane-image-1">
            <img alt="img" src={HurricaneMichael1} />
          </div>
        </div>

        <div className="hurricane-image-2">
          <img alt="img" src={HurricaneMichael2} />
        </div>
      </div>
      <h2 className="pitition-header" center>
        Organizing International Mother's Language Day-2019
      </h2>
      <div className="pitition-des">
        <div className="pitition-image">
          <div>
            <img alt="img" src={MotherLang1} />
          </div>
        </div>
        <div className="pitition-image-1">
          <div>
            <img alt="img" src={MotherLang2} />
          </div>
        </div>
        <div className="pitition-text">
          <p>
            International Mother's Language day is one of the significant event
            for Bengali speaking people. With the help of Palm Beach Sherif and
            ABPAC - Global Citizens for Humanity organized an event where
            childrens were focused to learn the importance of mother language
            for a nation. The whole program was financed by members of GCH.
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
      <h2 className="pitition-header" center>
        Food Aid to Bahama After Hurricane Dorian
      </h2>
      <div className="pitition-des">
        <div className="pitition-image">
          <div>
            <img alt="img" src={FoodDorian1} />
          </div>
        </div>
        <div className="pitition-image-1">
          <div>
            <img alt="img" src={FoodDorian2} />
          </div>
        </div>
        <div className="pitition-text">
          <p>
            Hurricane Dorian was an extremely powerful and catastrophic Category
            5 Atlantic hurricane, which became the most intense tropical cyclone
            on record to strike the Bahamas on 24 August, 2019. GCH immediately
            responded to the need of Bahama people with dry food and important
            grocery items.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GchActivity;
