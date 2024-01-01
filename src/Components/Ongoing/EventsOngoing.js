import "./EventsOngoingStyles.css";
import OngoingEvent1 from "../Assets/Ongoing/TreePlantation-1.jpg";
import OngoingEvent2 from "../Assets/Ongoing/TreePlantation-2.jpg";
import OngoingEvent3 from "../Assets/Ongoing/TreePlantation-3.jpg";
import OngoingEvent4 from "../Assets/Ongoing/TreePlantation-4.jpg";
import OngoingEvent5 from "../Assets/Ongoing/AntiPlastic-1.jpg";
import OngoingEvent6 from "../Assets/Ongoing/AntiPlastic-2.jpg";

function EventOngoing() {
  return (
    <div className="Ongoing-container">
      <h1>GCH Ongoing Activities</h1>
      <p>Make Our Environment Green</p>
      <h2>Jackfruit Tree Plant Distribution</h2>
      <div className="Ongoing-des">
        <div className="Ongoing-text">
          <p>
            To strengthen environmental stability and decrease the effect of
            Green House Effect, with the help of Green Eco, Global Citizens for
            Humanity has planned to ripe thousands of Jackfruit trees in the
            northers part of Bangladesh. The project has already started with
            the distribution of 10,000 jackfruit plants among the school
            children. This will increase the environmental stability in this
            area.
          </p>
        </div>
        <div className="Ongoing-event">
          <img alt="img" src={OngoingEvent1} />
          <img alt="img" src={OngoingEvent2} />
        </div>
        <div className="Ongoing-event">
          <a
            href="https://www.facebook.com/globalcitizensforhumanity/videos/1060107668683257"
            target="_blank"
          >
            <img
              id="corona-support-image-1"
              alt="corona-vdo"
              src={OngoingEvent3}
            />
          </a>
          <a
            href="https://www.facebook.com/globalcitizensforhumanity/videos/1781576548969012"
            target="_blank"
          >
            <img
              id="corona-support-image-1"
              alt="corona-vdo"
              src={OngoingEvent4}
            />
          </a>
        </div>
      </div>
      <h2 className="Ongoing-2-heading">
        Anti Plastic Campaign - Beach Cleaning
      </h2>
      <div className="Ongoing-des">
        <div className="Ongoing-text">
          <p>
            To reduce the effect of plastic on the environment, especially those
            who live in the ocean, GCH undertook beach cleaning project which is
            a continuous process. GCH mainly targets various beaches where a lot
            of plastic materials are thrown by the normal visitors. GCH always
            try to convince the visitors of the importance of keeping the beach
            clean and its impact on the ocean if they fail.
          </p>
        </div>
        <div className="Ongoing-event">
          <img alt="img" src={OngoingEvent5} />
          <img alt="img" src={OngoingEvent6} />
        </div>
      </div>
    </div>
  );
}

export default EventOngoing;
