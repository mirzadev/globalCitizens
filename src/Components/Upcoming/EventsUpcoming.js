import "./EventsUpcomingStyles.css";

import upcomingEvent1 from "../Assets/Upcoming/UpcomingEvent-1.jpg";
// import upcomingEvent2 from "../Assets/Upcoming/UpcomingEvent-2.jpg";

function EventUpcoming() {
  return (
    <div className="upcoming-container">
      <h1>GCH Upcoming Activities</h1>
      <p className="upcoming-dt">
        Date & Time: January 03, 2026 at 03:00 PM - 09:00 PM EST
      </p>
      <p className="upcoming-location" color="Blue">
        <a
          id="address-link"
          href="https://discover.pbcgov.org/parks/Locations/South-County-Civic-Center.aspx"
          target="_blank"
          rel="noreferrer"
        >
          RV: South Florida Civic Center, 16700 Jog Rd, Delray Beach, FL-33446
        </a>
      </p>

      <h2>Career Development Workshop</h2>
      <div className="upcoming-des">
        <div className="Upcoming-text">
          <p>
            A Career Development Workshop is a valuable opportunity for high
            school seniors and contemporary students to explore their future
            goals and gain clarity on career paths. These seminars provide
            insights into various professions, resume building, interview
            preparation, and essential soft skills that are often not covered in
            regular academic settings. They also connect students with mentors,
            industry professionals, and resources that can guide them in making
            informed decisions. Attending such workshops empowers students to
            set clear goals, boosts their confidence, and prepares them for life
            beyond school.The seminar will be organized on January, 2024.
          </p>
        </div>
        <div className="upcoming-event">
          <img alt="img" src={upcomingEvent1} />
          {/* <img alt="img" src={upcomingEvent2} /> */}
        </div>
      </div>
    </div>
  );
}

export default EventUpcoming;
