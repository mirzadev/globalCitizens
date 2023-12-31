import "./EventsUpcomingStyles.css";

import upcomingEvent1 from "../Assets/Upcoming/UpcomingEvent-1.jpg";
import upcomingEvent2 from "../Assets/Upcoming/UpcomingEvent-2.jpg";

function EventUpcoming() {
  return (
    <div className="upcoming-container">
      <h1>GCH Upcoming Activities</h1>
      <p className="upcoming-dt">Date & Time: May 12, 2024 at 06:00 PM EST</p>
      <p className="upcoming-location" color="Blue">
        <a
          id="address-link"
          href="https://discover.pbcgov.org/parks/Locations/South-County-Civic-Center.aspx"
          target="_blank"
          rel="noreferrer"
        >
          RV: South Florida Civic Center, Boca Raton
        </a>
      </p>

      <h2>Security Awareness Seminar</h2>
      <div className="upcoming-des">
        <div className="Upcoming-text">
          <p>
            To increase security awareness in the community, Global Citizens For
            Humanity in coordination with Palm Beach County Sherif Department,
            is going to organize a seminar where safety related issues of a
            person will get priority. In this seminar, Palm Beach Sherif
            Department will listen to community people's general issues and will
            give guidelines accordingly.The seminar is likely to be organized on
            May 12, 2024.
          </p>
        </div>
        <div className="upcoming-event">
          <img alt="img" src={upcomingEvent1} />
          <img alt="img" src={upcomingEvent2} />
        </div>
      </div>
    </div>
  );
}

export default EventUpcoming;
